import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDescuentoComponent } from './juego-descuento.component';

describe('JuegoDescuentoComponent', () => {
  let component: JuegoDescuentoComponent;
  let fixture: ComponentFixture<JuegoDescuentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoDescuentoComponent]
    });
    fixture = TestBed.createComponent(JuegoDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
