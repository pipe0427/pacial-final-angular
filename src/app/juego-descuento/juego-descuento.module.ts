import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoDescuentoRoutingModule } from './juego-descuento-routing.module';
import { JuegoDescuentoComponent } from './juego-descuento/juego-descuento.component';


@NgModule({
  declarations: [
    JuegoDescuentoComponent
  ],
  imports: [
    CommonModule,
    JuegoDescuentoRoutingModule
  ]
})
export class JuegoDescuentoModule { }
