import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Credential } from '../models/credential';
import { AuthenResponse } from '../models/authen-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  authen(credential: Credential): Observable<AuthenResponse> {
   return this.http.post<AuthenResponse>(`${environment.api_url}/auth/login`, credential);
  }
}
