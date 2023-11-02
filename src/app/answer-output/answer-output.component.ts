import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-answer-output',
  templateUrl: './answer-output.component.html',
  styleUrls: ['./answer-output.component.css']
})
export class AnswerOutputComponent {
  
  
  public response: string | null = null; // Variable para almacenar la respuesta
  public latestResponse: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.latestResponse$.subscribe(response => {
        this.latestResponse = response;
    });
  }


  
}
