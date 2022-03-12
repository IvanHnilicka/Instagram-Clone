import { Component } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ionic-angular-1948326';
  total = 90;

  esCierto = true;

  imagenes = [
    "assets/perro.jpg",
    "assets/perro.jpg",
    "assets/perro.jpg",
    "assets/perro.jpg",
    "assets/perro.jpg"
  ];

  perfil = false;

  togglePerfil(): void{
    this.perfil = !this.perfil;
  }

}

