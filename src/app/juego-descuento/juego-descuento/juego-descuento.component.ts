import { Component } from '@angular/core';
import { Juego } from 'src/app/model/juego';
import { JuegoService } from 'src/app/services/juego.service';
import { UsuarioSesrvice } from 'src/app/services/usuario-sesrvice.service';

@Component({
  selector: 'app-juego-descuento',
  templateUrl: './juego-descuento.component.html',
  styleUrls: ['./juego-descuento.component.css']
})
export class JuegoDescuentoComponent {
  edad:boolean = false
  juegos:Juego[]
  constructor(private juegoService:JuegoService,
    private usuarioService:UsuarioSesrvice) {
      this.juegos = []
  }

  ngOnInit(): void {
    this.buscarUsuario()
    this.listarjuegos()
  }

  listarjuegos() {
    for(let juego of this.juegoService.listarJuegos()){
      if(this.edad == true && juego.descuento == true){
        this.juegos.push(juego)
      }else{
        
          if(juego.edadPermitida < 18 && juego.descuento == true){
            this.juegos.push(juego)
          }
        }
      }
  }
  buscarUsuario(){
    const result = this.usuarioService.buscarUsuarioEamil(sessionStorage.getItem('user'))

    if(result!= null){
      if(result.edad >= 18){
        this.edad = true
      }else{
        this.edad = false
      }
    }
  }
}
