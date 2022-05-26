import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BdServiceService } from '../bd-service.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Storage, ref } from '@angular/fire/storage';
import { uploadString } from 'firebase/storage';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  }

  constructor(private bd: BdServiceService,
     private storage: Storage,
     private nativegeocoder: NativeGeocoder) { }

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
    "usuario": "@cat",
    "ubicacion": ""
  }

  address: any;

  onSubmit(f: NgForm){
    if(this.imgURL){
      const file = this.imgURL;
      console.log(file);
      
      const imgRef = ref(this.storage, "imagenes/" + this.id + ".png");
      uploadString(imgRef, file, 'data_url').then(res =>{
        console.log(res);
      })

      this.bd.postPublicacion(this.nuevoPost).subscribe(res => {
        alert("Post subido con exito");
        console.log(this.imgURL);
        this.imgURL = "";
        this.nuevoPost.caption = "";
        this.nuevoPost.ubicacion = "";
      })

    }else{
      alert("Capture o seleccione una imagen");
    }
  }



  async abrirCamara(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });

    this.imgURL = image.dataUrl;
  }




  async getLocation(){
    const location = await Geolocation.getCurrentPosition();
    console.log("Location: " + location);

    this.nativegeocoder.reverseGeocode(location.coords.latitude, location.coords.longitude, this.options).then((res: NativeGeocoderResult[]) =>{
      console.log("Result: " + res);
      console.log("Result: " + res[0]);

      let address = this.generateAddress(res[0]);
      var addressParts = address.split(",");
      this.nuevoPost.ubicacion = addressParts[3] + ", " + addressParts[4];
    })
  }

  generateAddress(addressObj: any){
    let obj: any[] = [];
    let uniqueNames: any[] = [];
    let address = "";
    for(let key in addressObj){
      if(key != 'areasOfInterest'){
        obj.push(addressObj[key]);
      }
    }

    var i = 0;
    obj.forEach(value =>{
      if(uniqueNames.indexOf(obj[i]) === -1){
        uniqueNames.push(obj[i]);
      }

      i++;
    })

    uniqueNames.reverse();
    for(let val in uniqueNames){
      if(uniqueNames[val].length){
        address += uniqueNames[val] + ', ';
      }
    }

    return address.slice(0, -2);
  }

}