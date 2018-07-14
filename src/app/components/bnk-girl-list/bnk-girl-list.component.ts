import { BnkService } from './../../services/bnk.service';
import { Member } from './../../models/member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {

  members: Member[];

  constructor(private bnkService: BnkService) { }

  ngOnInit() {
    this.bnkService.list().subscribe( (data: Member[]) => { this.members = data; } );
  }

}
