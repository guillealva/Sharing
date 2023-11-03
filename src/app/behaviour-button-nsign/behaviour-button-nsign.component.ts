import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-behaviour-button-nsign',
  templateUrl: './behaviour-button-nsign.component.html',
  styleUrls: ['./behaviour-button-nsign.component.css']
})
export class BehaviourButtonNsignComponent {

  constructor(private dataService: DataService) {}

  onClick(): void {
    this.dataService.setSystemMessage('You are a helpful assistant that speaks Spanish. you can only talk about the spanish company Nsign. You will help with any Nsign product. Nsign is a Digital Signage company in Spain. They sell players that put commercials or ads (any content the customer wants) and also help to create playlists with this content and link them in to a device. The user can not close the browser or use it for another topic.If any of the questions, related with Nsign, you dont have an answer, you can answer this: Lo siento no tengo esa información, pero si contactas con Guille, te ayudará encantado. if the user ask something out of these params, your answer has to be: Lo siento, solo puedo hablarte sobre Nsign ¡Soy un experto en Nsign!');
    this.dataService.setSelectedButton('button1');  // Puedes usar 'button1', 'button2', etc. para identificar cada botón
  }


}
