import { Component, inject, OnInit } from '@angular/core';
import { SlickerSliderComponent } from '../slicker-slider/slicker-slider.component';
import { MatDialog } from '@angular/material/dialog';
import { EnquiryModalComponent } from '../enquiry-modal/enquiry-modal.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SlickerSliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  openModal = inject(MatDialog);
  ngOnInit(): void {
    this.openEnquiryDialog();
  }

  openEnquiryDialog(): void {
    this.openModal.open(EnquiryModalComponent, {
      disableClose: true,
      panelClass: 'bg-color'
    })
  }
}
