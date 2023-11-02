import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, from, map, BehaviorSubject } from 'rxjs'; // <-- Añade BehaviorSubject aquí
import { OpenAI } from 'openai';
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

  private userMessage: string = '';

  // Añade estas líneas para manejar la respuesta
  private responseSource = new BehaviorSubject<string | null>(null);
  currentResponse$ = this.responseSource.asObservable();

  constructor() {}

  getResponseGPT() {
    return from(this.openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that speaks Spanish."
        },
        {
          role: "user",
          content: this.userMessage
      }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
    })).pipe(
      filter(resp => resp.choices && resp.choices.length > 0 && !!resp.choices[0].message.content),
      map(resp => {
        // Emite la respuesta a través del BehaviorSubject
        this.responseSource.next(resp.choices[0].message.content);
        return resp.choices[0].message.content;
      })
    );
  }

  setMessage(message: string): void {
    this.userMessage = message;
  }

  getMessage(): string {
    return this.userMessage;
  }
}
