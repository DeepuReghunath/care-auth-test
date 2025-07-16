import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

interface LoginResponse {
  token: string;
  user: { email: string };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'auth_token';
  private emailKey = 'user_email';

  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/login', { email, password }).pipe(
      tap((res) => {
        this.cookies.set(this.tokenKey, res.token);
        this.cookies.set(this.emailKey, res.user.email);
      })
    );
  }

  logout(): void {
    this.cookies.delete(this.tokenKey);
    this.cookies.delete(this.emailKey);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.cookies.check(this.tokenKey);
  }

  getToken(): string {
    return this.cookies.get(this.tokenKey);
  }

  getEmail(): string {
    return this.cookies.get(this.emailKey);
  }
}
