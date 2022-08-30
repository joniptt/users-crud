import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../models/login.model';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  login(user: User): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>('usuario/login', user).pipe(
      tap((data) => {
        const decoded: any = jwt_decode(data.accessToken);
        localStorage.setItem('perm', decoded.user.type)
        localStorage.setItem('token', data.accessToken);
      })
    );
  }

  logout(route: string) {
    localStorage.clear();
    this.router.navigate([route]);
  }
}
