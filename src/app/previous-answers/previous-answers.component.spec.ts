import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousAnswersComponent } from './previous-answers.component';

describe('PreviousAnswersComponent', () => {
  let component: PreviousAnswersComponent;
  let fixture: ComponentFixture<PreviousAnswersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousAnswersComponent]
    });
    fixture = TestBed.createComponent(PreviousAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
