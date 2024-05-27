import { Component } from '@angular/core';
import { IMAGE_CONFIG, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-caurosel',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './caurosel.component.html',
  styleUrl: './caurosel.component.scss',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: (config: ImageLoaderConfig) => {
        return `http://localhost:4200/src/assets/${config}`
      }
    }
  ]
})
export class CauroselComponent {

  constructor() {}

  ngOnInit(): void {
  }
}
