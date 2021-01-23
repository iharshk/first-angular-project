import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ListService {


  constructor( private http:HttpClient ) { }
 
  ISP_services(): Observable <any> {
    return this.http.get('http://localhost:3000/get-route');
  }
}
