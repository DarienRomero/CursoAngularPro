import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {DrlSideMenuComponent, TitleColor} from 'drl-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrlSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'drl-testbed-app';

  isAuthenticated = signal(true);

  TitleColor = TitleColor
}
