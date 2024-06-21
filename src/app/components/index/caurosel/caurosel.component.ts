import { Component, inject } from '@angular/core';
import { IMAGE_CONFIG, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { ImagesService } from '../../../services/images.service';

@Component({
  selector: 'app-caurosel',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './caurosel.component.html',
  styleUrl: './caurosel.component.scss',
  providers: []
})
export class CauroselComponent {
  service = inject(ImagesService);
  data: any = [];
  constructor() {}

  ngAfterViewInit(): void {
    this.getBanner();
  }

  getBanner(): void {
    this.service.getAllBanners().subscribe({
      next: async (result) => {
        if (result.result) {
          this.data = [];
          for (const blob of result.result) {
            try {
              const base64String = blob.data ? this.base64ArrayBuffer(blob.data.data) : null;
              this.data.push({
                image: `data:image/png;base64,${base64String as string}`,
                id: blob.id
              });
            } catch (error) {
              console.error("Error converting Blob to Base64:", error);
            }
          }
        }
      }
    })
  }

  base64ArrayBuffer(buffer: any) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return binary;
  }
}
