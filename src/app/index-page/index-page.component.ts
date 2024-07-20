import { Component, inject } from '@angular/core';
import { CauroselComponent } from '../components/index/caurosel/caurosel.component';
import { FooterComponent } from '../footer/footer.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { MenuHeaderComponent } from '../components/menu-header/menu-header.component';
import { TopHeaderComponent } from '../components/top-header/top-header.component';
import { environment } from '../../environment/environments';
import { EnquiryModalComponent } from '../components/enquiry-modal/enquiry-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [    
    TopHeaderComponent,
    MenuHeaderComponent,
    HomePageComponent,
    CauroselComponent,
    FooterComponent],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss'
})
export class IndexPageComponent {
  openModal = inject(MatDialog);
  domain = environment.apiUrl;

  openDialog(): void {
    this.openModal.open(EnquiryModalComponent, {
      disableClose: true,
      panelClass: 'bg-color'
    })
  }
}
