import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BdServiceService } from '../bd-service.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Storage, ref } from '@angular/fire/storage';
import { uploadString } from 'firebase/storage';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private bd: BdServiceService,
     private storage: Storage) { }

  ngOnInit(): void {}


  crearID() {
    var id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 8; i++)
      id += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return id;
  }

  id = this.crearID();
  imgURL: any;

  nuevoPost: any = {
    "caption": "",
    "id": this.id,
    "src": this.id,
    "usuario": "@cat"
  }

  
  onSubmit(f: NgForm){
    if(this.imgURL != ""){
      const file = this.imgURL;
      console.log(file);
      
      const imgRef = ref(this.storage, 'imagenes/' + this.nuevoPost.id);
      uploadString(imgRef, file, 'data_url')
      .then(response => console.log(response))
      .catch(error => console.log(error));

    }else{
      alert("Capture o seleccione una imagen");
    }

    this.bd.postPublicacion(this.nuevoPost).subscribe(res => {
      alert("Post subido con exito");
      console.log(this.imgURL);
      this.imgURL = "";
      this.nuevoPost.caption = "";
    })
  }

  async abrirCamara(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });

    this.imgURL = image.dataUrl;
  }

}
