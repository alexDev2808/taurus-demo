import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiURL = 'http://localhost:3000/api/files/items'

  constructor( private httpClient: HttpClient ) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL)
  }
}
