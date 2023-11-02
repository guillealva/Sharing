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

    this.dataService.getResponseGPT(this.prompt).subscribe(
      resp => {
        this.response = resp;
        // Aquí puedes guardar la respuesta en alguna otra parte, como en un servicio global o en local storage, para ser leído por otros componentes.
      }
    );
    this.prompt = '';
  }

  }



  



