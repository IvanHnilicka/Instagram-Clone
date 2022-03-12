import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts = [
    {
      "id": "38tn240g1",
      "imagen": "assets/imagenesPerfil/imagen1.jpg"
    },
    {
      "id": "gm48gn25",
      "imagen": "assets/imagenesPerfil/imagen3.jpg"
    },
    {
      "id": "92nrf72bvb",
      "imagen": "assets/imagenesPerfil/imagen2.jpg"
    }
  ];

}
