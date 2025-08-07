import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header-app',
  imports: [],
  templateUrl: './header-app.component.html',
  styleUrl: './header-app.component.scss'
})
export class HeaderAppComponent {
  constructor(
    private router: Router,
  ) {
  }
  navigateToCart() {
    this.router.navigate(['/cart']).then();
  }
  navigateToMenu() {
    this.router.navigate(['/menu']).then();
  }
}
