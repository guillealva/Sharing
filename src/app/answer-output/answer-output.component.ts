import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-answer-output',
  templateUrl: './answer-output.component.html',
  styleUrls: ['./answer-output.component.css']
})
export class AnswerOutputComponent implements OnInit {

  public response: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.responseObservable.subscribe(data => {
      if (data.choices && data.choices.length > 0) {
        this.response = data.choices[0].text;
      } else if (data.error) {
        this.response = data.error;
      }
    });
  }
}
