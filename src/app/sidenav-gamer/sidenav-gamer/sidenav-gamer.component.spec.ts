import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavGamerComponent } from './sidenav-gamer.component';

describe('SidenavGamerComponent', () => {
  let component: SidenavGamerComponent;
  let fixture: ComponentFixture<SidenavGamerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavGamerComponent]
    });
    fixture = TestBed.createComponent(SidenavGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
