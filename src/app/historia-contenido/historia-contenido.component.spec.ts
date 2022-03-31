import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaContenidoComponent } from './historia-contenido.component';

describe('HistoriaContenidoComponent', () => {
  let component: HistoriaContenidoComponent;
  let fixture: ComponentFixture<HistoriaContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
