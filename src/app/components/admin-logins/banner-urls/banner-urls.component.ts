import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ImagesService } from '../../../services/images.service';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-banner-urls',
  standalone: true,
  imports: [MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './banner-urls.component.html',
  styleUrl: './banner-urls.component.scss'
})
export class BannerUrlsComponent {
  @ViewChild('bannerUrl') modal!: TemplateRef<any>;
  dialog = inject(MatDialog);
  fileData: any;
  imgViewer = '';
  service = inject(ImagesService);
  data: any = [];

  ngAfterViewInit(): void {
    this.getBanner();
  }

  uploadImage(): void {
    let fileSelected: any;
    fileSelected = document.getElementById('filepaths');
    fileSelected = fileSelected.files;
    if (fileSelected.length > 0) {
      const fileToLoad = fileSelected[0];
      let fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEventTrigger) {
        let textAreaFileContents: any;
        textAreaFileContents = document.getElementById('filepaths');
        textAreaFileContents.innerHTML = fileLoadedEventTrigger.target?.result;
      }
      fileReader.readAsDataURL(fileToLoad);
      setTimeout(() => {
        let fileTosaveName: any;
        fileTosaveName = (fileReader.result as string).split(',')[1];
        this.saveBanner(fileTosaveName);
      }, 500)
    }
    else {
      let fileTosaveName: any;
      if (this.imgViewer) {
        fileTosaveName = (this.imgViewer as string).split(',')[1]
      }
      this.saveBanner(fileTosaveName);
    }
  }

  imageUpload(event: any) {
    const file = event.target.files;
    this.imgViewer = window.URL.createObjectURL(file[0]);
  }

  imageClickable() {
    document.getElementById('filepaths')?.click();
  }

  saveBanner(base64: any): void {
    const formdata = new FormData();
    formdata.append('file', base64);

    this.service.addBanner(formdata).subscribe({
      next: () =>{
        this.dialog.closeAll();
        this.getBanner();
      }
    })
  }

  openModal(): void {
    this.dialog.open(this.modal, {
      width: '60vw',
      height: '40vw'
    });
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

  removeBanner(id: number): void {
    this.service.removeBanner(id).subscribe({
      next: (result) => {
        this.getBanner();
      },
      error: () => {}
    })
  }

}
