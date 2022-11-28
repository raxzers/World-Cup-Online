import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';

import { CommunityComponent } from './community.component';

describe('CommunityComponent', () => {
  let component: CommunityComponent;
  let fixture: ComponentFixture<CommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunityComponent],
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, MatDialogModule, MatIconModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('validar funcion unirse a Comunidad', () => {
  //   const homeComponent =fixture.componentInstance;

  //    homeComponent.unirseComunidad();
  //    expect(homeComponent.unirseComunidad()).toBe();
  //  });
  it('validar funcion obtener codigo', () => {
    const homeComponent = fixture.componentInstance;

    homeComponent.obtenerCodigo("codigo");
    expect(homeComponent.codigo).toBe("codigo");
  });


  it('validar nombre comunidad correcto', () => {
    const homeComponent = fixture.componentInstance;
    let user = homeComponent.guardarLiga.controls['nombreComunidad'];
    user.setValue('111111111122222222223333333333')

    expect(homeComponent.verificarNombreComunidad()).toBe(false);


  });
  it('validar nombre comunidad erroneo', () => {
    const homeComponent = fixture.componentInstance;
    let user = homeComponent.guardarLiga.controls['nombreComunidad'];
    user.setValue('')

    expect(homeComponent.verificarNombreComunidad()).toBe(true);
  });
  it('validar torneo no seleccionado', () => {
    const homeComponent = fixture.componentInstance;
    let user = homeComponent.guardarLiga.controls['nombreComunidad'];
    user.setValue('')
    homeComponent.verificarTorneoSeleccionado()
    expect(homeComponent.paisCondicion).toBe(true);
  });
  it('validar guardar comunidad malo', () => {
    const homeComponent = fixture.componentInstance;
    homeComponent.paisCondicion = true;
    homeComponent.guardarComunidad();
    expect(homeComponent.paisCondicion).toBe(true);
  });


  it('validar guardar comunidad ', () => {
    const homeComponent = fixture.componentInstance;
    homeComponent.paisCondicion = false;
    /// homeComponent.unirseComunidad();
    expect(homeComponent.paisCondicion).toBe(false);
  });


});
