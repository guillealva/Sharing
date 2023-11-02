import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ask-button',
  templateUrl: './ask-button.component.html',
  styleUrls: ['./ask-button.component.css']
})




export class AskButtonComponent  implements OnInit{

  public prompt: string = ''; // Para almacenar la entrada del usuario
  public response: string | null = null; // Para mostrar la respuesta de OpenAI

  constructor(private dataService: DataService) { }

  ngOnInit() {}

  sendMessage(){

    const userMessage = this.dataService.getMessage();
    this.dataService.getResponseGPT().subscribe(resp => {
      this.response = resp;
    });

  }

}



  



