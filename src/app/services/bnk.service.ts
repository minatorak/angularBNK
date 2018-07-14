import { Member } from './../models/member';

import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  list(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api_url}/bnk/members`);
  }
}
