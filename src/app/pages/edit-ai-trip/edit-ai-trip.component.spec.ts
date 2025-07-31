import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAiTripComponent } from './edit-ai-trip.component';

describe('EditAiTripComponent', () => {
  let component: EditAiTripComponent;
  let fixture: ComponentFixture<EditAiTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAiTripComponent]
    });
    fixture = TestBed.createComponent(EditAiTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
