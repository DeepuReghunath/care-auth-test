import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userEmail: string = '';

  constructor(private authService: AuthService) {
    this.userEmail = this.authService.getEmail();
  }

  logout(): void {
    this.authService.logout();
  }
}
