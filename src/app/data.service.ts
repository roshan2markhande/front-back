import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor (private http:HttpClient) {
    console.log('hi')
  }

} 

