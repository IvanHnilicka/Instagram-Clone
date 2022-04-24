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
    return this.http.post('https://insta-base-32-a975c-default-rtdb.firebaseio.com/publicaciones.json', post);
  }



  //Funciones DELETE
  deletePublicacion(id: number){
    return this.http.delete('https://insta-base-32-a975c-default-rtdb.firebaseio.com/publicaciones/' + id.toString() + '.json');
  }



  //Funciones PUT
  updatePublicacion(id: number, nuevosDatos: any){
    return this.http.put('https://insta-base-32-a975c-default-rtdb.firebaseio.com/publicaciones/' + id.toString() + '.json', nuevosDatos);
  }

}
