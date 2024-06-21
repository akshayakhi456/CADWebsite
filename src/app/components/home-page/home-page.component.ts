import { Component } from '@angular/core';
import { SlickerSliderComponent } from '../slicker-slider/slicker-slider.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SlickerSliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
