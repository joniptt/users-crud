import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/clients.model';
import { Propostas } from '../models/propostas.model';
import { User } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(private http: HttpClient) {}

  getPropostas(): Observable<Propostas[]> {
    return this.http.get<Propostas[]>('propostas');
  }

  deleteProposta(id: number): Observable<any> {
    return this.http.delete(`proposta/${id}`);
  }

  postProposta(proposta: Propostas): Observable<Propostas> {
    return this.http.post<Propostas>('proposta', proposta);
  }

  patchProposta(id: number, proposta: Propostas): Observable<any> {
    return this.http.patch<any>(`proposta/${id}`, proposta);
  }

  createUsuario(user: User): Observable<User> {
    return this.http.post<User>('usuario', user);
  }

  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>('usuarios');
  }

  getClientes(): Observable<Client[]> {
    return this.http.get<Client[]>('clients');
  }

  insertClient(client: Client): Observable<Client> {
    return this.http.post<Client>('client', client);
  }

  patchClient(id: number, client: Client): Observable<any> {
    return this.http.patch<any>(`client/${id}`, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`client/${id}`);
  }
}
