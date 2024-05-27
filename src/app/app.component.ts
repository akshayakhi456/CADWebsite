import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CauroselComponent } from './caurosel/caurosel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    TopHeaderComponent,
    MenuHeaderComponent,
    HomePageComponent,
    CauroselComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cadIns';
}
