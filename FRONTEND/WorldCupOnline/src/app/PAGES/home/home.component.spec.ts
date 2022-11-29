import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TeamService } from 'src/app/SERVICES/team/team.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[ReactiveFormsModule,ToastrModule.forRoot(),HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Verificar Condiciones no se cumplen', () => {
    const homeComponent = fixture.componentInstance;
    homeComponent.faseCondicion=true;
    homeComponent.nombreTorneoCondicion=true;
    homeComponent.fechaInicioCondicion=true;
    homeComponent.fechaFinalCondicion=true;
    homeComponent.tipoEquipoCondicion=true;
    homeComponent.fechaInicioActualCondicion=true;
    homeComponent.fechaCalzanCondicion=true;
    console.log(homeComponent.verificarCondiciones());
    expect(homeComponent.verificarCondiciones()).toBe(false);
  });

  it('Verificar Condiciones se cumplen', () => {
    const homeComponent =fixture.componentInstance;
    homeComponent.condiciones=[false,false,false,false,false,false,false,false];
    expect(homeComponent.verificarCondiciones()).toBe(true);
  });
  it('validar nombre torneo menor de 30 caracteres', () => {
    const registerComponent =fixture.componentInstance;
    let user= registerComponent.nombreTorneoForm.controls['nombreTorneo'];
    user.setValue('111111111122222222223333333333')
    console.log(user.value.length);
    expect(user.value.length).toBe(30);
  });
  it('validar nombre torneo vacio', () => {
    const homeComponent =fixture.componentInstance;
    let user= homeComponent.nombreTorneoForm.controls['nombreTorneo'];
    user.setValue(undefined);
    homeComponent.verificarNombre();
    expect(homeComponent.nombreTorneoCondicion).toBe(true);
  });
  it('validar nombre torneo no vacio', () => {
    const homeComponent =fixture.componentInstance;
    let user= homeComponent.nombreTorneoForm.controls['nombreTorneo'];
    user.setValue('Concacaf');
    homeComponent.verificarNombre();
    expect(homeComponent.nombreTorneoCondicion).toBe(false);
  });
  it('validar guardar fase', () => {
    const homeComponent =fixture.componentInstance;
    let user= homeComponent.nombreTorneoForm.controls['faseControl'];
    homeComponent.fases[0]='Concacaf';
    homeComponent.guardarFase();
    expect(homeComponent.fases[0]).toBe('Concacaf');
  });
  it('verificar envio de datos', () => {
    const registerComponent =fixture.componentInstance;
  

    let nombre= registerComponent.nombreTorneoForm.controls['nombreTorneo'];
    let fechaInicioControl= registerComponent.fechaInicioForm.controls['fechaInicioControl'];
    let fechaFinalControl= registerComponent.fechaFinalForm.controls['fechaFinalControl'];
    let tipoEquipo= registerComponent.tipoEquipo;
    let reglasControl= registerComponent.reglasForm.controls['reglasControl'];
    let equiposTorneo= registerComponent.equiposTorneo;
    let fases= registerComponent.fases;

    nombre.setValue('Brandon');
    fechaInicioControl.setValue('20/12/2023'); 
    fechaFinalControl.setValue('20/12/2024');
    tipoEquipo="Seleccion";
    reglasControl.setValue('traznar@gmail.com');
    equiposTorneo= ["Costa Rica","Espana","Japon"];
    fases=["Final","Cuartos","Grupos"];
    
    expect(registerComponent.guardarTorneo()).toBe();
  });
  it('verificar envio de datos erroneo', () => {
    const registerComponent =fixture.componentInstance;
  

    let nombre= registerComponent.nombreTorneoForm.controls['nombreTorneo'];
    let fechaInicioControl= registerComponent.fechaInicioForm.controls['fechaInicioControl'];
    let fechaFinalControl= registerComponent.fechaFinalForm.controls['fechaFinalControl'];
    let tipoEquipo= registerComponent.tipoEquipo;
    let reglasControl= registerComponent.reglasForm.controls['reglasControl'];
    let equiposTorneo= registerComponent.equiposTorneo;
    let fases= registerComponent.fases;

    nombre.setValue('Brandon');
    fechaInicioControl.setValue(""); 
    fechaFinalControl.setValue("");
    tipoEquipo="Seleccion";
    reglasControl.setValue('traznar@gmail.com');
    equiposTorneo= ["Costa Rica","Espana","Japon"];
    fases=[];
    
    expect(registerComponent.guardarTorneo()).toBe();
  });

  it('verificar inicializacion de datos de service', () => {
    const registerComponent =fixture.componentInstance;
    const spy = spyOn(component, 'obtenerSeleccion').and.callThrough();
    fixture.detectChanges();
    expect(spy).toBeTruthy();
  });
  it('validar guardar tipo equipo', () => {
    const homeComponent =fixture.componentInstance;
    homeComponent.getTipoEquipo();
    expect(homeComponent.tipoEquipo).toBe('Club');
  });
  it('validar guardar nombre torneo mayor a 5 caracteres', () => {
    const homeComponent =fixture.componentInstance;
    let nombre= homeComponent.nombreTorneoForm.controls['nombreTorneo'];
    nombre.setValue("1");
    homeComponent.onInput();
    expect(homeComponent.btnState).toBe(true);
  });
  it('validar guardar nombre torneo menor a 5 caracteres', () => {
    const homeComponent =fixture.componentInstance;
    let nombre= homeComponent.nombreTorneoForm.controls['nombreTorneo'];
    nombre.setValue("12345");
    homeComponent.onInput();
    expect(homeComponent.btnState).toBe(false);
  });

  it('validar guardar nombre fase mayor a 5 caracteres', () => {
    const homeComponent =fixture.componentInstance;
    let nombre= homeComponent.faseForm.controls['faseControl'];
    nombre.setValue("1");
    homeComponent.onInput2();
    expect(homeComponent.btnStateFase).toBe(true);
  });
  it('validar guardar nombre fase menor a 5 caracteres', () => {
    const homeComponent =fixture.componentInstance;
    let nombre= homeComponent.faseForm.controls['faseControl'];
    nombre.setValue("12345");
    homeComponent.onInput2();
    expect(homeComponent.btnStateFase).toBe(false);
  });

  it('validar equipo to add ninguno', () => {
    const homeComponent =fixture.componentInstance;
 
    homeComponent.getEquipotoAdd();
    expect(homeComponent.equiposTorneo.length).toBe(0);
  });
  it('validar equipo to add', () => {
    const homeComponent =fixture.componentInstance;
 
    homeComponent.getEquipotoAdd();
    homeComponent.equiposTorneo[0]="Costa Rica";
    expect(homeComponent.equiposTorneo.length).toBe(1);
  });
  it('validar equipos torneo ', () => {
    const homeComponent =fixture.componentInstance;
    homeComponent.equiposTorneo=["CostaRica","Venezuela","Jamaica",];
    homeComponent.guardarTorneo();
    expect(homeComponent.equiposTorneo.length).toBe(3);
  });
  it('validar equipos torneo ', () => {
    const homeComponent =fixture.componentInstance;
    homeComponent.equiposTorneo=["Costa Rica","Colombia"];
    homeComponent.eliminarEquipo("Colombia");
    expect(homeComponent.equiposTorneo.length).toBe(1);
  });
  it('validar fases torneo ', () => {
    const homeComponent =fixture.componentInstance;
    homeComponent.fases=[];
    homeComponent.eliminarFase("SemiFinal");
    expect(homeComponent.equiposTorneo.length).toBe(0);
  });
  it('test obtenerSeleccion prueba service)', async () => {
    const serviceSpy: TeamService = TestBed.get(TeamService);
    spyOn(serviceSpy, 'obtenerSelecciones1').and.returnValue(Promise.resolve([]));
    expect(component.obtenerSeleccion()).toBe();
    expect(await serviceSpy.obtenerSelecciones1).toHaveBeenCalled();
  });
  it('test obtenerClub prueba service)', async () => {
    const serviceSpy: TeamService = TestBed.get(TeamService);
    spyOn(serviceSpy, 'obtenerClubs1').and.returnValue(Promise.resolve([]));
    expect(component.obtenerClub()).toBe();
    expect(await serviceSpy.obtenerClubs1).toHaveBeenCalled();
  });

});
