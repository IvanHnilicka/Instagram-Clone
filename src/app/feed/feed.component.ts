import { Component, OnInit } from '@angular/core';
import { BdServiceService } from '../bd-service.service';
import { PopoverController } from '@ionic/angular';
import { PublicacionComponent } from '../publicacion/publicacion.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private db: BdServiceService, private popover: PopoverController) { }

  ngOnInit(): void {
    this.cargarPublicaciones();
  }

  cargarPublicaciones(){
    this.db.getPublicaciones().subscribe((res: any) => {
      this.Publicaciones = Object.values(res);
    })
  }

  Publicaciones: any = [];
  key: string[] = [];

  borrarPost(idPost: number){
    this.db.getPublicaciones().subscribe((res: any) =>{
      this.key = Object.keys(res);

      this.db.deletePublicacion(this.key[idPost]).subscribe(res =>{
        alert("Post borrado con exito");
        console.log("Post " + this.key[idPost] + " borrado");

        this.cargarPublicaciones();
      })
    })

  }

  
  editando: boolean = false;

  guardarCambios(id: number, datos: any){
    this.db.getPublicaciones().subscribe((res: any) =>{
      this.key = Object.keys(res);

      this.db.updatePublicacion(this.key[id], datos).subscribe(res =>{
        alert("Cambios guardados");
        this.editando = false;
        console.log(this.key[id]);
  
        this.cargarPublicaciones();      
      })
    })
  }

  liked: boolean = false;

  like(){
    this.liked = !this.liked;
  }
}
