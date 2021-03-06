import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '../../../node_modules/@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith(environment.api_url)) {
      const token = this.auth.getToken();
      if (token) {
        request = request.clone({
          setHeaders: { Authorization: `Bearer ${token}`}
        });
      }
    }

    return next.handle(request);
  }
}
