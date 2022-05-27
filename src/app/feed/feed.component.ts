import { Component, OnInit } from '@angular/core';
import { BdServiceService } from '../bd-service.service';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig =  {
  projectId: 'insta-base-32-a975c',
  appId: '1:5870988053:web:036ff59ce57a77ff1e971c',
  databaseURL: 'https://insta-base-32-a975c-default-rtdb.firebaseio.com',
  storageBucket: 'insta-base-32-a975c.appspot.com',
  locationId: 'us-central',
  apiKey: 'AIzaSyBCawkq742zAmz_geXv7noNQKfgcBMzK8g',
  authDomain: 'insta-base-32-a975c.firebaseapp.com',
  messagingSenderId: '5870988053',
}

const app = initializeApp(firebaseConfig);


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private db: BdServiceService) { }

  ngOnInit(): void {
    this.cargarPublicaciones();
  }


  cargarPublicaciones(){
    this.db.getPublicaciones().subscribe((res: any) => {
      this.Publicaciones = Object.values(res);
      this.key = Object.keys(res);
      this.cargarImagenes();
    })
  }


  cargarImagenes(){
    const storage = getStorage();

    for(let i = 0; i < this.Publicaciones.length; i++){
      getDownloadURL(ref(storage, "imagenes/" + this.Publicaciones[i].id + ".png"))
      .then((url) =>{
        this.Publicaciones[i].src = url;
      })
      .catch(error =>{
        console.log("Error. " + error);
      })
    }
  }


  Publicaciones: any = [];
  key: string[] = [];

  liked: boolean = false;

  like(){
    this.liked = !this.liked;
  }

}
