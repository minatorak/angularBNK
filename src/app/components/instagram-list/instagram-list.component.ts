import { Feed } from './../../models/feed';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instagram-list',
  templateUrl: './instagram-list.component.html',
  styleUrls: ['./instagram-list.component.css']
})
export class InstagramListComponent implements OnInit {
  @Input()feed: Feed;

  constructor() { }

  ngOnInit() {
  }

}
