import { Component } from '@angular/core';
import { environment } from '../../../environment/environments';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent {
  domain = environment.apiUrl;
}
