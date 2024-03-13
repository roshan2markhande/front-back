import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-from',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration-from.component.html',
  styleUrl: './registration-from.component.scss',
  providers:[DataService]
})
export class RegistrationFromComponent {
  constructor(private http:HttpClient) {

  }
  user: any = {}; // This will store form data
  
  onSubmit() {
    this.http.post('http://127.0.0.1:8080/create',this.user).subscribe((user:any)=>{
      console.log('User submitted:', this.user);
      alert('sucess')
     });
  }

  } 
  

