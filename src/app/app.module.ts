import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { AskButtonComponent } from './ask-button/ask-button.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AnswerOutputComponent } from './answer-output/answer-output.component';
import { PreviousAnswersComponent } from './previous-answers/previous-answers.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { BehaviourButtonKioskComponent } from './behaviour-button-kiosk/behaviour-button-kiosk.component';
import { BehaviourButtonWinesComponent } from './behaviour-button-wines/behaviour-button-wines.component';
import { BehaviourButtonNsignComponent } from './behaviour-button-nsign/behaviour-button-nsign.component';


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    AskButtonComponent,
    AnswerOutputComponent,
    PreviousAnswersComponent,
    LoadingIndicatorComponent,
    BehaviourButtonKioskComponent,
    BehaviourButtonWinesComponent,
    BehaviourButtonNsignComponent
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
