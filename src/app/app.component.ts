import { Component } from '@angular/core';
import {HeaderAppComponent} from './Component/header-app/header-app.component';
import {MainAppComponent} from './Component/main-app/main-app.component';
import {FooterAppComponent} from './Component/footer-app/footer-app.component';

@Component({
  selector: 'app-root',
  imports: [HeaderAppComponent, FooterAppComponent, MainAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'creater_web_jollibee';



}

