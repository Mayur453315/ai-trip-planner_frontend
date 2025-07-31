import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTripDetailsComponent } from './ai-trip-details.component';

describe('AiTripDetailsComponent', () => {
  let component: AiTripDetailsComponent;
  let fixture: ComponentFixture<AiTripDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiTripDetailsComponent]
    });
    fixture = TestBed.createComponent(AiTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
