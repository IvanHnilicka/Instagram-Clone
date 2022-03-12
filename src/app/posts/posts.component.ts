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
    },
    {
      "id": "94jg824t",
      "imagen": "assets/imagenesPerfil/imagen5.jpg"
    },
    {
      "id": "hj9249t0g",
      "imagen": "assets/imagenesPerfil/imagen6.jpg"
    },
    {
      "id": "fqm39ngb",
      "imagen": "assets/imagenesPerfil/imagen7.jpg"
    },
    {
      "id": "01ng82nh3",
      "imagen": "assets/imagenesPerfil/imagen8.jpg"
    },
    {
      "id": "gm19344n1",
      "imagen": "assets/imagenesPerfil/imagen9.jpg"
    },
    {
      "id": "jh813ghw",
      "imagen": "assets/imagenesPerfil/imagen10.jpg"
    }
  ];

}
