import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateItineraryComponent } from './generate-itinerary.component';

describe('GenerateItineraryComponent', () => {
  let component: GenerateItineraryComponent;
  let fixture: ComponentFixture<GenerateItineraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateItineraryComponent]
    });
    fixture = TestBed.createComponent(GenerateItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
