import { Router } from '@angular/router';
import { BnkService } from '../../services/bnk.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  list: Member[];

  constructor(private listMember: BnkService, private router: Router) { }

  ngOnInit() {
    this.listMember.list().subscribe(data => this.list = data);
  }

  editEnter(id: string) {
   this.router.navigate(['admin/edit/' + id]);
  }
}
