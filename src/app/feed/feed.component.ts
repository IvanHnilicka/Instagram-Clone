import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  perrillos = [
    {
      "usuario": "@unosperrillos",
      "src": "assets/perro.jpg",
      "caption": "unos perrillos..."
    },
    {
      "usuario": "@amsiedad",
      "src": "assets/amsiedad.jpg",
      "caption": "me da amsiedad"
    }
  ];

}
