import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { RegistrationFromComponent } from './registration-from/registration-from.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistrationFromComponent,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crudOperation';
  constructor(private http:HttpClient) {

  }
}
