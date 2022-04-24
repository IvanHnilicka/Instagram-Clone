import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-post-feed',
  templateUrl: './detalle-post-feed.component.html',
  styleUrls: ['./detalle-post-feed.component.css']
})
export class DetallePostFeedComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  post = this.ruta.snapshot.params['id'];
  detallePost: any = {};

  ngOnInit(): void {
    this.obtenerPost(this.post);
  }

  publicaciones: any = [
    {
      caption: "Loving my new hat!",
      id: "83nng72h",
      src: "assets/imagen1.jpg",
      usuario: "@kittyCat"
    },
    {
      caption: "Me as a baby",
      id: "92ng29t1tg",
      src: "assets/imagen2.jpg",
      usuario: "@graykitty104"
    }
  ];

  obtenerPost(id: string){
    for(let i = 0; i < this.publicaciones.length; i++){
      if(this.publicaciones[i].id == id){
        this.detallePost = this.publicaciones[i];
      }
    }

    return this.detallePost;
  }

}
