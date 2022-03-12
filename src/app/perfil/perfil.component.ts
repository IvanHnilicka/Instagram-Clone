import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usuario = {
    "nombre": "Cat",
    "usuario": "@CatInAHat",
    "descripcion": "Meow!",
    "followers": 257165, 
    "following": 120,
    "posts": 3,
    "fotoPerfil": "assets/imagenesPerfil/imagen4.jpg"
  };

  editando = false;

  toggleEditarPerfil(): void{
    this.editando = !this.editando;
  }

  @Input() bio: string = "";

  guardarBio(): void{
    this.usuario.descripcion = this.bio;
    this.toggleEditarPerfil();
  }

}
