import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatFactsService {
  private apiUrl = 'https://catfact.ninja/fact';

  constructor(private http: HttpClient) { }

  getFacts(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
}
