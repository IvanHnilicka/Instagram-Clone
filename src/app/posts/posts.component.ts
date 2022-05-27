import { Component, OnInit } from '@angular/core';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private db: BdServiceService) { }

  ngOnInit(): void {
    this.db.getPostsUsuario().subscribe((res: any) =>{
      this.publicaciones = Object.values(res);
      this.keys = Object.keys(res);
      this.cargarImagenes();
    })
  }

  publicaciones: any = [];
  keys: any = [];
  imagenes: any = [];


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
