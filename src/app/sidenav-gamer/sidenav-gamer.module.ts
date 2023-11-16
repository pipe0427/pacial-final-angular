import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavGamerComponent } from './sidenav-gamer/sidenav-gamer.component';



@NgModule({
  declarations: [
    SidenavGamerComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    SidenavGamerComponent
  ]
})
export class SidenavGamerModule { }
