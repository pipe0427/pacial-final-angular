import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoDescuentoComponent } from './juego-descuento/juego-descuento.component';

const routes: Routes = [
  {path:'',component:JuegoDescuentoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegoDescuentoRoutingModule { }
