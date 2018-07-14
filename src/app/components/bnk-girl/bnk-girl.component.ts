import { Member } from './../../models/member';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bnk-girl',
  templateUrl: './bnk-girl.component.html',
  styleUrls: ['./bnk-girl.component.css']
})
export class BnkGirlComponent implements OnInit {

  @Input() member: Member;

  constructor() { }

  ngOnInit() {
  }

}
