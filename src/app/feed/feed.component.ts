import { Component, OnInit } from '@angular/core';
import { BdServiceService } from '../bd-service.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private db: BdServiceService, private popover: PopoverController) { }

  ngOnInit(): void {
    this.db.getPublicaciones().subscribe((res: any) => {
      this.Publicaciones = res;
    })
  }

  Publicaciones: any = [];

  borrarPost(idPost: number){
    this.db.deletePublicacion(idPost).subscribe(res =>{
      alert("Post borrado con exito");
      this.ngOnInit();
    })
  }


  editando: boolean = false;

  guardarCambios(id: number, datos: any){
    this.db.updatePublicacion(id, datos).subscribe(res =>{
      alert("Cambios guardados");
      this.editando = false;
      this.ngOnInit();
    })
  }
}
