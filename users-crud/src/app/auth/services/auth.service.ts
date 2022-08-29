import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: User): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>('usuario/login', user).pipe(
      tap((data) => {
        localStorage.setItem('token', data.accessToken);
      })
    );
  }

  logout(route: string) {
    localStorage.clear();
    this.router.navigate([route]);
  }
}
