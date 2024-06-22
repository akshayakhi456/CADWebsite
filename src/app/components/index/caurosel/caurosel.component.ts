import { Component, inject } from '@angular/core';
import {NgOptimizedImage } from '@angular/common';
import { ImagesService } from '../../../services/images.service';
import { environment } from '../../../../environment/environments';

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
  domain = environment.apiUrl
  constructor() {}

  ngAfterViewInit(): void {
    this.getBanner();
  }

  getBanner(): void {
    this.service.getAllBanners().subscribe({
      next: async (result) => {
        if(result.result?.length) {
          let time = 2000 * result.result.length;
          this.data = result.result.map((r: any) => {
            time -= 2000;
            return {
              image: `${this.domain}/images/${r.name}`,
              id: r.id,
              time
            }
          })
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
