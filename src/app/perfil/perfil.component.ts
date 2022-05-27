import { Component, OnInit, Input } from '@angular/core';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private db: BdServiceService) { }

  ngOnInit(): void {
    this.db.getDatosUsuario().subscribe((res: any) =>{
      this.usuario = res;
      console.log(this.usuario);
    })
  }

  usuario: any = {};

  editando = false;

  toggleEditarPerfil(): void{
    this.editando = !this.editando;
  }

  @Input() bio: string = "";

  guardarBio(): void{
    this.usuario.descripcion = this.bio;
    this.db.updateBio(this.usuario).subscribe(res=>{
      console.log(res);
      alert("Bio actualizada");
    })
    this.toggleEditarPerfil();
  }

}
