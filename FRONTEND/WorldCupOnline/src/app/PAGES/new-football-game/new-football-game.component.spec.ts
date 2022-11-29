import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { NewFootballGameComponent } from './new-football-game.component';

describe('NewFootballGameComponent', () => {
  let component: NewFootballGameComponent;
  let fixture: ComponentFixture<NewFootballGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewFootballGameComponent],
      imports: [HttpClientModule, ToastrModule.forRoot(), ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFootballGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('validar la cantidad de torneos', () => {
    const lista = component.torneox;
    expect(lista).toHaveSize(4);
  });

  it('validar que la cantidad de torneos sea mayor a cero', () => {
    const lista = component.torneox;
    expect(Boolean(lista.length)).toBe(true);
  });

  it('validar un formControl', () => {
    const email = component.testForm.controls['testControl']
    email.setValue('usuario@correo.com')
    expect(component.testForm.invalid).toBeTrue();
  });

  it('validar que la sede sea un string vacio', () => {
    const sede = fixture.debugElement.nativeElement.querySelector('[data-testid="sedeTest"]');
    expect(sede.textContent).toBe('');
  });

  it('validar una sede especifica', () => {
    const NewFootballGameComponent = fixture.componentInstance;
    let estadio = NewFootballGameComponent.sede
    expect(estadio).toBe('Rayyan');
  });

  it('validar que la sede sea un string', () => {
    const NewFootballGameComponent = fixture.componentInstance;
    let sede_string = NewFootballGameComponent.es_string
    expect(sede_string).toBe(true);
  });

  it('validar fecha del partido', () => {
    const nombre = fixture.debugElement.nativeElement.querySelector('[data-testid="fechaTest"]');
    const NewFootballGameComponent = fixture.componentInstance;
    let fecha = NewFootballGameComponent.fechaInicioForm.controls['fechaInicioControl'];
    fecha.setValue('31/10/1349');
    NewFootballGameComponent.verificarFechasx(fecha.value);
    expect(NewFootballGameComponent.fechaInicioCondicion).toBe(true);
  });

  it('validar longitud del nombre de la sede', () => {
    const NewFootballGameComponent = fixture.componentInstance;
    let sede = NewFootballGameComponent.sede;
    expect(sede.length).toBe(6);
  });

  it('set fecha', () => {
    const partido = component.nuevo_partido;
    const fecha = component.fechaInicioForm.controls['fechaInicioControl'].setValue(new Date)
    //fecha.setValue('20/12/2024')
    const hoy = new Date()
    component.setFechaInicio();
    expect(partido.Fecha).toEqual(hoy);
  });

});
