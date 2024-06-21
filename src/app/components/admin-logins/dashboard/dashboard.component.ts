import { Component } from '@angular/core';
import { BannerUrlsComponent } from '../banner-urls/banner-urls.component';
import { CandidateListComponent } from '../candidate-list/candidate-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BannerUrlsComponent, CandidateListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
