import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerOutputComponent } from './answer-output.component';

describe('AnswerOutputComponent', () => {
  let component: AnswerOutputComponent;
  let fixture: ComponentFixture<AnswerOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerOutputComponent]
    });
    fixture = TestBed.createComponent(AnswerOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
