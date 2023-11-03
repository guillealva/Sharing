import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourButtonKioskComponent } from './behaviour-button-kiosk.component';

describe('BehaviourButtonKioskComponent', () => {
  let component: BehaviourButtonKioskComponent;
  let fixture: ComponentFixture<BehaviourButtonKioskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviourButtonKioskComponent]
    });
    fixture = TestBed.createComponent(BehaviourButtonKioskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
