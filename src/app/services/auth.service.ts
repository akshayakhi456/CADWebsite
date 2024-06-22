import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { urls } from '../shared/api-constants';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private router = inject(Router);
  private http = inject(HttpClient);

  constructor() {}

  login(user: { username: string; password: string }): Observable<any> {
    return this.http
      .post(urls.loginPage, user)
      .pipe(
        tap((tokens: any) =>
          this.doLoginUser(user.username, JSON.stringify(tokens))
        )
      );
  }

  private doLoginUser(email: string, token: any) {
    this.loggedUser = email;
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  getCurrentAuthUser() {
    return this.http.get('https://api.escuelajs.co/api/v1/auth/profile');
  }

  isLoggedIn() {
    return !!localStorage.getItem(this.JWT_TOKEN);
  }

  isTokenExpired() {
    const platformId = inject(PLATFORM_ID);
    const tokens = isPlatformBrowser(platformId) ? localStorage.getItem(this.JWT_TOKEN) : '';
    if (!tokens) return false;
    const token = JSON.parse(tokens).token;
    const decoded = jwtDecode(token);
    if (!decoded.exp) return false;
    const expirationDate = decoded.exp * 1000;
    const now = new Date().getTime();

    return expirationDate > now;
  }

  refreshToken() {
    let tokens: any = localStorage.getItem(this.JWT_TOKEN);
    if (!tokens) return;
    tokens = JSON.parse(tokens);
    let refreshToken = tokens.refresh_token;
    return this.http
      .post<any>('https://api.escuelajs.co/api/v1/auth/refresh-token', {
        refreshToken,
      })
      .pipe(tap((tokens: any) => this.storeJwtToken(JSON.stringify(tokens))));
  }
}