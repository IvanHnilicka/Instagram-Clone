import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdServiceService {

  constructor(private http: HttpClient) { }

  //Funciones GET
  getPublicaciones(): any{
    return this.http.get('https://insta-base-32-a975c-default-rtdb.firebaseio.com/publicaciones.json')
  }

  getDatosUsuario(): any{
    return this.http.get('https://insta-base-32-a975c-default-rtdb.firebaseio.com/usuario.json')
  }

  getPostsUsuario(): any{
    return this.http.get('https://insta-base-32-a975c-default-rtdb.firebaseio.com/usuario/publicaciones.json')
  }



  //Funciones POST
  postPublicacion(post: any){
    return this.http.post('https://insta-base-32-a975c-default-rtdb.firebaseio.com/usuario/publicaciones.json', post);
  }



  //Funciones DELETE
  deletePublicacion(){
    
  }


}