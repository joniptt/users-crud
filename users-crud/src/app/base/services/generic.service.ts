import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propostas } from '../models/propostas.model';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(private http: HttpClient) {}

  getPropostas(): Observable<Propostas[]> {
    return this.http.get<Propostas[]>('propostas');
  }
}
