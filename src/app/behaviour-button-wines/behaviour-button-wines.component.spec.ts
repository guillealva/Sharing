import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourButtonWinesComponent } from './behaviour-button-wines.component';

describe('BehaviourButtonWinesComponent', () => {
  let component: BehaviourButtonWinesComponent;
  let fixture: ComponentFixture<BehaviourButtonWinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviourButtonWinesComponent]
    });
    fixture = TestBed.createComponent(BehaviourButtonWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
