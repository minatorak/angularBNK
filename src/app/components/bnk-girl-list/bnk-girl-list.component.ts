import { Member } from './../../models/member';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {

  members: Member[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Member[]>('http://localhost:3000/bnk/members')
            .subscribe( (data: Member[]) => { this.members = data; } );
  }

}
