import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-slicker-slider',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './slicker-slider.component.html',
  styleUrl: './slicker-slider.component.scss'
})
export class SlickerSliderComponent {
}
