import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serverUrl = 'http://localhost:3000/ask-openai';

  private userInputSource = new BehaviorSubject<string>('');
  public userInputObservable = this.userInputSource.asObservable();

  private responseSource = new BehaviorSubject<any>({});
  public responseObservable = this.responseSource.asObservable();

  constructor(private http: HttpClient) { }

  setUserInput(data: string): void {
    this.userInputSource.next(data);
  }

  askOpenAI(): Observable<any> {
    const prompt = this.userInputSource.getValue();
    if (prompt) {
      return this.http.post<any>(this.serverUrl, { prompt });
    } else {
      console.warn("Prompt is empty.");
      return of({ error: "Prompt is empty." });
    }
  }

  setResponse(data: any): void {
    this.responseSource.next(data);
  }
}
