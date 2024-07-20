import { Component, inject } from '@angular/core';
import { environment } from '../../environment/environments';
import { EnquiryModalComponent } from '../components/enquiry-modal/enquiry-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currYear = new Date().getFullYear();
  openModal = inject(MatDialog);
  domain = environment.apiUrl;

  openDialog(course: string): void {
    this.openModal.open(EnquiryModalComponent, {
      data: {
        course
      },
      disableClose: true,
      panelClass: 'bg-color'
    })
  }

  scrollToAbout(): void {
    const html = document.querySelector('.cadd-body');
    html?.scrollIntoView({behavior:'smooth'});
  }
}
