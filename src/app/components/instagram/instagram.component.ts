import { Feed } from './../../models/feed';
import { BnkService } from './../../services/bnk.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  feed: Feed;

  constructor(private route: ActivatedRoute, private bnkService: BnkService) { }

  ngOnInit() {
    const idMember = this.route.snapshot.paramMap.get('instagramId');
    this.bnkService.instagram(idMember).subscribe(data => {
      this.feed = data;
      console.log('data feed from instagram ~>', data);
    });

  }

}
