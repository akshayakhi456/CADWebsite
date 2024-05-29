import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickerSliderComponent } from './slicker-slider.component';

describe('SlickerSliderComponent', () => {
  let component: SlickerSliderComponent;
  let fixture: ComponentFixture<SlickerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlickerSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlickerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
