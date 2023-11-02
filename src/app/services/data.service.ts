import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, from, map, BehaviorSubject } from 'rxjs'; // <-- Añade BehaviorSubject aquí
import { OpenAI } from 'openai';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const APIKEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly openai = new OpenAI({
    apiKey: APIKEY,
    dangerouslyAllowBrowser: true,
  });



  private _latestResponse = new BehaviorSubject<string|null>(null);
  public latestResponse$ = this._latestResponse.asObservable();
  
  private _previousAnswers = new BehaviorSubject<string[]>([]);
  public previousAnswers$ = this._previousAnswers.asObservable();

  private _isLoading = new BehaviorSubject<boolean>(false);
  public isLoading$ = this._isLoading.asObservable();
  
  private _userMessage = new BehaviorSubject<string|null>(null);
  
  getResponseGPT() {
    console.log("Antes de hacer la petición:", this._isLoading.value); // debería ser false
    this._isLoading.next(true); 

    return from(this.openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that speaks Spanish. And you can only provide information when you've been asked about what recipe, ingredients, foods, restaurants or something related directly with the wine fit btetter with some wine. Every question out of theese params, the answer has to be: Lo siento no puedo ayudarte más alla de los vinos"
        },
        {
          role: "user",
          content: this.getMessage()
      }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
    })).pipe(
      filter(resp => resp.choices && resp.choices.length > 0 && !!resp.choices[0].message.content),
      map(resp => {
        const content = resp.choices[0].message.content;
        if (content) {
          this.addResponse(content);
        }
        return content;
      }),
      tap(() => {
        console.log("Después de recibir la respuesta:", this._isLoading.value); // debería ser true
        this._isLoading.next(false);  ;  // Desactiva el indicador de carga al final
      })

    );
  }

  setMessage(message: string): void {
    this._userMessage.next(message);
  }

  getMessage(): string {
    return this._userMessage.value || ''; 
  }

  public addResponse(response: string): void {
    const previousAnswers = this._previousAnswers.value;

    if (previousAnswers.length >= 5) {
        previousAnswers.shift(); // Elimina la respuesta más antigua si hay más de 5 respuestas.
    }

    // Añade la respuesta anterior (la más reciente antes de esta nueva respuesta) a las respuestas anteriores.
    const lastResponse = this._latestResponse.value;
    if (lastResponse) {
        this._previousAnswers.next([...previousAnswers, lastResponse]);
    }

    // Establece la nueva respuesta como la respuesta más reciente.
    this._latestResponse.next(response);
}

public get previousAnswers(): string[] {
  return this._previousAnswers.value;
}

}
