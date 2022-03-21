import { Component, OnInit } from '@angular/core';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private db: BdServiceService) { }

  ngOnInit(): void {
    this.db.getPublicaciones().subscribe((res: any) => {
      this.Publicaciones = res;
    })
  }

  Publicaciones: any = [];

}
