import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-behaviour-button-wines',
  templateUrl: './behaviour-button-wines.component.html',
  styleUrls: ['./behaviour-button-wines.component.css']
})
export class BehaviourButtonWinesComponent {

  constructor(private dataService: DataService) {}

  onClick(): void {
    this.dataService.setSystemMessage('You are a helpful assistant that speaks Spanish. you can only talk about wines, recipes that fit with these wines, ingredients, restaurants, wine history. if the user ask something out of these params, your answer has to be: Lo siento, solo puedo hablarte sobre vinos ¡Soy un experto en vinos!');
    this.dataService.setSelectedButton('button1');  // Puedes usar 'button1', 'button2', etc. para identificar cada botón
  }

}
