import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourButtonNsignComponent } from './behaviour-button-nsign.component';

describe('BehaviourButtonNsignComponent', () => {
  let component: BehaviourButtonNsignComponent;
  let fixture: ComponentFixture<BehaviourButtonNsignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviourButtonNsignComponent]
    });
    fixture = TestBed.createComponent(BehaviourButtonNsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
