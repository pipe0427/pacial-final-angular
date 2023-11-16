import { Injectable } from '@angular/core';
import { Juego } from '../model/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  battefield:Juego = new Juego("1","battefield",new Date(),120000,18,"https://i.blogs.es/0fd0f6/battlefield-2042-portada/840_560.jpg",false)
  overcooked2:Juego = new Juego("2","Overcooked 2",new Date(),50000,0,"https://i.blogs.es/435eba/over0/1024_2000.webp",false)
  forniteDescuento:Juego = new Juego("3","Fornite",new Date(),20000,16,"https://i.blogs.es/a49369/fortnite_20180529152311/1024_2000.jpg",true)
  residentDescuento:Juego = new Juego("4","Resident Evil 7", new Date(), 70000, 18,"https://upload.wikimedia.org/wikipedia/en/f/fd/Resident_Evil_7_cover_art.jpg",true)

  juegos:Juego[]
  constructor() {
    this.juegos = []
    this.juegos.push(this.battefield)
    this.juegos.push(this.overcooked2)
    this.juegos.push(this.forniteDescuento)
    this.juegos.push(this.residentDescuento)
  }

  listarJuegos():Juego[]{
    return this.juegos  
  }
  buscarJuego(nombre:string){
    for (let i = 0; i < this.juegos.length; i++) {
      if(this.juegos[i].nombre == nombre){
        return this.juegos[i]
      }
    }
    return null
  }
}
