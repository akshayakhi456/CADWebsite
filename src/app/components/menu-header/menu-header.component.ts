import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnquiryModalComponent } from '../enquiry-modal/enquiry-modal.component';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.scss'
})
export class MenuHeaderComponent {
  openModal = inject(MatDialog);
  isMenuOpen = false;
  programCourseOpen = false;
  studentCornerOpen = false;

  openDialog(course: string): void {
    this.openModal.open(EnquiryModalComponent, {
      data: {
        course
      },
      disableClose: true,
      panelClass: 'bg-color'
    })
  }
}
