import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instagram-item',
  templateUrl: './instagram-item.component.html',
  styleUrls: ['./instagram-item.component.css']
})
export class InstagramItemComponent implements OnInit {

  @Input()img_url: string;
  @Input()title: string;
  @Input()username: string;

  constructor() { }

  ngOnInit() {
    console.log('img ~>', this.img_url);
  }

}
