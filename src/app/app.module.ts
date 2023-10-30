import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { AskButtonComponent } from './ask-button/ask-button.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { AnswerOutputComponent } from './answer-output/answer-output.component';


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    AskButtonComponent,
    AnswerOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
