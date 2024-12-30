import { Component } from '@angular/core';
import { LoginAppComponent } from "./view/login-app/login-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'study_angular';
}
