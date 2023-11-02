import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { filter, from, map } from 'rxjs';



@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})


export class TextInputComponent {


  message: string = '';

  constructor(private chatgptSvc: DataService) { }

  onInputChange() {
    from([this.message])
      .pipe(
        filter(msg => msg.length > 0), // Filtra los mensajes que no estén vacíos
        map(msg => msg.trim()) // Remueve espacios en blanco de los extremos
      )
      .subscribe(cleanMessage => {
        this.chatgptSvc.setMessage(cleanMessage);
      });
  }
  

}
