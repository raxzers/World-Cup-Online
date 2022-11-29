import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { ViewEventsComponent } from './view-events.component';

describe('ViewEventsComponent', () => {
  let component: ViewEventsComponent;
  let fixture: ComponentFixture<ViewEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEventsComponent],
      imports: [
        HttpClientModule,
        ToastrModule.forRoot()
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('validar que la lista de torneos inicia vacia', () => {
    const lista = component.nombre_torneos;
    expect(Boolean(lista.length)).toBe(false);
  });

  it('comprobar el nombre de un nombre de torneo', () => {
    component.torneo_actual = "Torneo X"
    let torneo = component.torneo_actual
    expect(torneo).toBe("Torneo X");
  });

  it('verificar la lista de los nombres de los torneos', () => {
    const lista = component.nombre_torneos;
    expect(Boolean(lista.length)).toBe(false);
  });

  it('verificar la lista de los nombres de los torneos', () => {
    const partido = component.partidos_por_torneo;
    expect(partido == null).toBe(true);
  });

});
