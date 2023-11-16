import { Component } from '@angular/core';
import { UsuarioSesrvice } from 'src/app/services/usuario-sesrvice.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  nombre!:string

  constructor(private usuarioService:UsuarioSesrvice){

  }

  ngOnInit(){
    this.buscarAdmin()
  }

  buscarAdmin(){
    console.log(sessionStorage.getItem('user'));
    
    const result = this.usuarioService.buscarUsuarioEamil(sessionStorage.getItem('user'))

    if(result != null){
      this.nombre = result.nombre
    }
  }
}
