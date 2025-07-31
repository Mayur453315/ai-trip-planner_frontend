import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTripListComponent } from './ai-trip-list.component';

describe('AiTripListComponent', () => {
  let component: AiTripListComponent;
  let fixture: ComponentFixture<AiTripListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiTripListComponent]
    });
    fixture = TestBed.createComponent(AiTripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
