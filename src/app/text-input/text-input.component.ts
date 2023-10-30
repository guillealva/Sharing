import { Component } from '@angular/core';
import { DataService } from '../data.service'



@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})


export class TextInputComponent {


  userInput: string = '';

  constructor(private sharedDataService: DataService) { }

  onInputChange() {
    this.sharedDataService.setUserInput(this.userInput);
  }

}
