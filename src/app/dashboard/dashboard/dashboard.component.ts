import { Component } from '@angular/core';
import { UsuarioSesrvice } from 'src/app/services/usuario-sesrvice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  invitado: boolean = false
  gamer:boolean = false
  admin:boolean = false

  constructor(private usuarioService:UsuarioSesrvice){
  }

  ngOnInit(){
    this.buscarUsuario()
  }

  buscarUsuario(){
    console.log(sessionStorage.getItem('user'));
    
    const result = this.usuarioService.buscarUsuarioEamil(sessionStorage.getItem('user'))

    console.log(result?.tipo);
    
    if(result != null){
      if(result.tipo == 'admin'){
        this.admin = true
        this.invitado = false
        this.gamer = false
        console.log(this.admin, this.gamer , this.invitado);
      }else if (result.tipo == 'gamer'){
        this.gamer = true
        this.admin = false
        this.invitado = false
        console.log(this.admin, this.gamer , this.invitado);
      }else{
        this.invitado = true
        this.gamer = false
        this.admin = false
        console.log(this.admin, this.gamer , this.invitado);
      }
    }

    
  }
}
