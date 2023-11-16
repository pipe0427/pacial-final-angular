import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavModule } from '../nav/nav.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { MainModule } from '../main/main.module';
import { SidenavGamerModule } from '../sidenav-gamer/sidenav-gamer.module';
import { SidenavInvitadoModule } from '../sidenav-invitado/sidenav-invitado.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavModule,
    SidenavModule,
    MainModule,
    SidenavGamerModule,
    SidenavInvitadoModule
  ],exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
