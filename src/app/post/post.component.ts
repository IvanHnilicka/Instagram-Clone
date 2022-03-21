import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private db: BdServiceService) { }

  post = this.ruta.snapshot.params['id'];
  postDetalle: any = {};

  ngOnInit(): void {
    this.obtenerPost(this.post);
  }


  posts: any = [];


  obtenerPost(id: string){
    this.db.getDetallePost(id);

    return this.postDetalle;
  }

}


