import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavInvitadoComponent } from './sidenav-invitado.component';

describe('SidenavInvitadoComponent', () => {
  let component: SidenavInvitadoComponent;
  let fixture: ComponentFixture<SidenavInvitadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavInvitadoComponent]
    });
    fixture = TestBed.createComponent(SidenavInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
