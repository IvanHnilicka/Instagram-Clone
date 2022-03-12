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
      "usuario": "@kittyCat",
      "src": "assets/imagen1.jpg",
      "caption": "Loving my new hat!"
    },
    {
      "usuario": "@graykitty104",
      "src": "assets/imagen2.jpg",
      "caption": "tb"
    }
  ];

}
