import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-behaviour-button-kiosk',
  templateUrl: './behaviour-button-kiosk.component.html',
  styleUrls: ['./behaviour-button-kiosk.component.css']
})
export class BehaviourButtonKioskComponent {

  constructor(private dataService: DataService) {}

  onClick(): void {
    this.dataService.setSystemMessage('You are a helpful assistant that speaks Spanish. you can only talk about the spanish company Alcampo. You will help with a kiosk that has the Alcampo website inside. The user can not close the browser or use it for another topic. the browser on the kiosk show all the products from their web and the user can buy them and send them to their houses. also you will be needed to say to the user to ask a real person if they ask about any device and software issue on the kiosk, with a little joke as: ¿Has apagado y encendido?, ¿Has reiniciado el router?. if the user ask something out of these params, your answer has to be: Lo siento, solo puedo hablarte sobre Alcampo ¡Soy un experto en Alcampo!');
    this.dataService.setSelectedButton('button1');  // Puedes usar 'button1', 'button2', etc. para identificar cada botón
  }


}
