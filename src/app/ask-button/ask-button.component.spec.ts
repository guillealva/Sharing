import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskButtonComponent } from './ask-button.component';

describe('AskButtonComponent', () => {
  let component: AskButtonComponent;
  let fixture: ComponentFixture<AskButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskButtonComponent]
    });
    fixture = TestBed.createComponent(AskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
