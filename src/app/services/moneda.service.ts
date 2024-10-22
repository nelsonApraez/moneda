import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moneda } from '../models/moneda.model';

@Injectable({
  providedIn: 'root',
})

export class MonedaService {
  private apiUrl = 'https://localhost:65010/api/v1/Moneda';

  constructor(private http: HttpClient) {}

  getMonedas(): Observable<Moneda[]> {
    return this.http.get<Moneda[]>(this.apiUrl);
  }

  addMoneda(moneda: Moneda): Observable<Moneda> {
    return this.http.post<Moneda>(this.apiUrl, moneda);
  }

  updateMoneda(moneda: Moneda): Observable<Moneda> {
    console.log(moneda);
    return this.http.put<Moneda>(this.apiUrl, moneda);
  }

  deleteMoneda(codigo: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${codigo}`);
  }
}
