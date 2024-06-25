import { Component } from '@angular/core';
import { CauroselComponent } from '../components/index/caurosel/caurosel.component';
import { FooterComponent } from '../footer/footer.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { MenuHeaderComponent } from '../components/menu-header/menu-header.component';
import { TopHeaderComponent } from '../components/top-header/top-header.component';
import { environment } from '../../environment/environments';

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
  domain = environment.apiUrl
}
