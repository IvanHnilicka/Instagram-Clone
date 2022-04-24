import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private bd: BdServiceService) { }

  ngOnInit(): void {
  }


  nuevoPost: any = {
    "caption": "",
    "id": "",
    "src": "assets/imagen3.jpg",
    "usuario": "kittyCat"
  }

  
  onSubmit(f: NgForm){
    this.bd.postPublicacion(this.nuevoPost).subscribe(res => {
      alert("Post subido con exito");
      console.log(res);
    })
  }

}
