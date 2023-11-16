import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioSesrvice {

  usuarioAdmin:Usuario = new Usuario("juan",19,"admin","juan@gmail.com","123456")
  usuarioInvitado:Usuario = new Usuario("Felipe",19,"invitado","felipe@gmail.com","123456")
  usuarioGamer:Usuario = new Usuario("Santiago",19,"gamer","santiago@gmail.com","123456")
  usuarioMenor:Usuario = new Usuario("Camilo",15,"invitado","camilo@gmail.com","123456")
  usuarioGamerM:Usuario = new Usuario("Kevin",13,"gamer","kevin@gmail.com","123456")
  usuarios:Usuario[]

  constructor() {
    this.usuarios = []
    this.usuarios.push(this.usuarioAdmin)
    this.usuarios.push(this.usuarioInvitado)
    this.usuarios.push(this.usuarioGamer)
    this.usuarios.push(this.usuarioMenor)
    this.usuarios.push(this.usuarioGamerM)
   }

   addUsuario(usuario:Usuario){
    this.usuarios.push(usuario)
   }
   listarUsuario():Usuario[]{
    return this.usuarios
   }

   buscarUsuarioEamil(email:any){
    console.log(email);
    for(let usuario of this.usuarios){
      console.log(usuario);
      
      if (usuario.email == email){
        return usuario
      }
    }
    return null
    /*
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].email = email) {
        return this.usuarios[i]
      }
    }
    return null*/
   }

   loginusuario(email:string, contrasena:string):boolean{
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuarios[i].email == email && this.usuarios[i].contrasena == contrasena){
        return true
      }
    }
    return false
   }
}
