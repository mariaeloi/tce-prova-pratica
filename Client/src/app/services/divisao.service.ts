import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Divisao } from '../models/divisao.model';
import { Resultado } from '../models/resultado.model';

@Injectable({
  providedIn: 'root'
})
export class DivisaoService {

  apiUrl: string = 'https://localhost:5000/Dividir';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getDivisao(divisao: Divisao): Observable<Resultado> {
    let query: string = `?dividendo=${divisao.dividendo}&divisor=${divisao.divisor}`;
    return this.httpClient.get<Resultado>(`${this.apiUrl}${query}`);
  }

  public postDivisao(divisao: Divisao): Observable<Resultado> {
    return this.httpClient.post<Resultado>(this.apiUrl, divisao);
  }
}
