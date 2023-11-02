import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, from, map } from 'rxjs';
//------------------------------------------------------------------------------------------
import { OpenAI } from 'openai';
import { environment } from 'src/environments/environment';

const APIKEY = process.env['OPENAI_API_KEY'];


@Injectable({
  providedIn: 'root'
})


export class DataService {

  readonly openai = new OpenAI({
    apiKey: APIKEY,
  })
  private userMessage: string = '';


  constructor() {}

  
  getResponseGPT (text: string){

    return from(this.openai.chat.completions.create({
      messages: [{ 
        role: "user", 
        content:text 
      }],
      model: "gpt-3.5-turbo",
      temperature:0.7,

    })).pipe(

      filter(resp => resp.choices && resp.choices.length > 0 && !!resp.choices[0].message.content),
      map(resp => resp.choices[0].message.content)

    )
    

  }

  setMessage(message: string): void {
    this.userMessage = message;
  }

  getMessage(): string {
    return this.userMessage;
  }

}
  
  
  
  
  
  
  
  
  
  
  
