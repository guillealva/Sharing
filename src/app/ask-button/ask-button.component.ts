import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ask-button',
  templateUrl: './ask-button.component.html',
  styleUrls: ['./ask-button.component.css']
})
export class AskButtonComponent {

  public prompt: string = ''; // Para almacenar la entrada del usuario
  public response: string = ''; // Para mostrar la respuesta de OpenAI

  constructor(private dataService: DataService) { }

  ask(): void {
    this.dataService.askOpenAI().subscribe(
      data => {
        this.dataService.setResponse(data);
      },
      error => {
        console.error("There was an error fetching data from OpenAI:", error);
      }
    );
}

  


}
