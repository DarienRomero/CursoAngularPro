import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../../shared/components/side-menu/side-menu.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export default class AdminLayoutComponent {
  isAuthenticated = signal(false);

  onLogin(){
    this.isAuthenticated.set(true)
  }
  onLogut(){
    this.isAuthenticated.set(false)
  }
}
