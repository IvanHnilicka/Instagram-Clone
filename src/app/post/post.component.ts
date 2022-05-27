import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getStorage, getDownloadURL, ref } from 'firebase/storage';
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
    this.db.getPostsUsuario().subscribe((res: any) =>{
      this.posts = Object.values(res);
      this.keys = Object.keys(res);
      this.obtenerPost(this.post);
    });
  }


  posts: any = [];
  keys: any = [];


  obtenerPost(id: String){
    this.cargarImagenes();

    for(let i = 0; i < this.posts.length; i++){
      if(this.posts[i].id == id){
        this.postDetalle = this.posts[i];
        this.post.src = this.imagenes[i];
      }
    }

    return this.postDetalle;
  }



  borrarPost(){
    for(let i = 0; i < this.posts.length; i++){
      if(this.posts[i].id == this.postDetalle.id){
        this.db.deletePublicacion(this.keys[i]).subscribe(res =>{
          console.log("Post " +  this.keys[i] + " eliminado");
          alert("Post eliminado con éxito");
          this.ngOnInit();
          this.ngOnInit();
        })
      }
    }
  }

  
  editando: boolean = false;

  guardarCambios(){
    for(let i = 0; i < this.posts.length; i++){
      if(this.posts[i].id == this.postDetalle.id){
        this.db.updatePublicacion(this.keys[i], this.postDetalle).subscribe(res =>{
          console.log(res);
          alert("Post actualizado");
          this.ngOnInit();
          this.editando = !this.editando;
        })
      }
    }


  }




  imagenes: string[] = [];

  cargarImagenes(){
    const storage = getStorage();

    for(let i = 0; i < this.posts.length; i++){
      getDownloadURL(ref(storage, "imagenes/" + this.posts[i].id + ".png"))
      .then((url) =>{
        this.posts[i].src = url;
      })
      .catch(error =>{
        console.log("Error. " + error);
      })
    }
  }

}