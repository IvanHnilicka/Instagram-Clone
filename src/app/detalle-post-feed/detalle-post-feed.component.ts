import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-detalle-post-feed',
  templateUrl: './detalle-post-feed.component.html',
  styleUrls: ['./detalle-post-feed.component.css']
})
export class DetallePostFeedComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private db: BdServiceService) { }

  post = this.ruta.snapshot.params['id'];
  detallePost: any = {};

  ngOnInit(): void {
    this.db.getPublicaciones().subscribe((res: any) => {
      this.publicaciones = Object.values(res);
      this.obtenerPost(this.post);
    })
  }


  publicaciones: any = [];
  

  obtenerPost(id: string){
    this.cargarImagenes();

    for(let i = 0; i < this.publicaciones.length; i++){
      if(this.publicaciones[i].id == id){
        this.detallePost = this.publicaciones[i];
        this.detallePost.src = this.imagenes[i];
      }
    }
    return this.detallePost;
  }


  imagenes: string[] = [];

  cargarImagenes(){
    const storage = getStorage();

    for(let i = 0; i < this.publicaciones.length; i++){
      getDownloadURL(ref(storage, "imagenes/" + this.publicaciones[i].id + ".png"))
      .then((url) =>{
        this.publicaciones[i].src = url;
      })
      .catch(error =>{
        console.log("Error. " + error);
      })
    }
  }

}
