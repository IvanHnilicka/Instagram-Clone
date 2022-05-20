import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BdServiceService } from '../bd-service.service';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private bd: BdServiceService, private camara: Camera) { }

  ngOnInit(): void {
  }


  crearID() {
    var id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 8; i++)
      id += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return id;
  }


  nuevoPost: any = {
    "caption": "",
    "id": this.crearID(),
    "src": "assets/imagen3.jpg",
    "usuario": "@cat"
  }

  
  onSubmit(f: NgForm){
    this.bd.postPublicacion(this.nuevoPost).subscribe(res => {
      alert("Post subido con exito");
      console.log(res);
    })
  }


  imgURL: any;

  abrirCamara(){
    this.camara.getPicture({
      sourceType: this.camara.PictureSourceType.CAMERA,
      destinationType: this.camara.DestinationType.FILE_URI
    }).then(res =>{
      this.imgURL = res;
    }).catch(e =>{
      console.log(e);
    })
  }


  abrirGaleria(){
    this.camara.getPicture({
      sourceType: this.camara.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camara.DestinationType.FILE_URI
    }).then(res =>{
      this.imgURL = res;
    }).catch(e =>{
      console.log(e);
    })
  }
}
