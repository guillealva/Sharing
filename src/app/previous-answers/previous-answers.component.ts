import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-previous-answers',
  templateUrl: './previous-answers.component.html',
  styleUrls: ['./previous-answers.component.css']
})
export class PreviousAnswersComponent implements OnInit {

  public previousResponses: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.previousAnswers$.subscribe(responses => {
        this.previousResponses = responses;
    });
  }
}
