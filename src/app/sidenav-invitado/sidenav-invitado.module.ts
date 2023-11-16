import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavInvitadoComponent } from './sidenav-invitado/sidenav-invitado.component';



@NgModule({
  declarations: [
    SidenavInvitadoComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    SidenavInvitadoComponent
  ]
})
export class SidenavInvitadoModule { }
