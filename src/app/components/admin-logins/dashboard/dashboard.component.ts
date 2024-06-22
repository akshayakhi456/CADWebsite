import { Component, inject } from '@angular/core';
import { BannerUrlsComponent } from '../banner-urls/banner-urls.component';
import { CandidateListComponent } from '../candidate-list/candidate-list.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BannerUrlsComponent, CandidateListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
service = inject(AuthService);

signout() {
  this.service.logout();
}
}
