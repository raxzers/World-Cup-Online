import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { ComunidadService } from 'src/app/SERVICES/comunidad/comunidad.service';
import * as Rx from 'rxjs';
import { CommunityComponent } from './community.component';
import { delay } from 'rxjs';
import { communityGetModel } from 'src/app/MODELS/getComunityModel';

describe('CommunityComponent', () => {
  let component: CommunityComponent;
  let fixture: ComponentFixture<CommunityComponent>;
  let service: ComunidadService;
  //let httpClientMock: HttpClientMock;
  let httpClientSpy: { post: jasmine.Spy };

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
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new ComunidadService(httpClientSpy as any);
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

  it('Error datos nulos comunidad', (done: DoneFn) => {
    const quiniela = { Usuario: null, NombreTorneo: null, NombreComunidad: null };
    const error_ = {
      error: "Datos incorrectos",
      status: 409,
      statusText: "Datos nulos"
    }
    httpClientSpy.post.and.returnValue(Rx.throwError(error_))
    service.guardarComunidad(quiniela).subscribe(resultado => {
    },
      error => {
        expect(error.status).toEqual(409);
        done();
      })
  });
  it('Ingresar a comunidad de otro usuario valido', (done: DoneFn) => {
    const quiniela = { COD_Invita: "c9x1LA2" };
    const error_ = {
      error: "Datos Correctos",
      status: 200,
      statusText: "Datos validos"
    }
    httpClientSpy.post.and.returnValue(Rx.throwError(error_))
    service.unirseComunidad(quiniela).subscribe(resultado => {
    },
      error => {
        expect(error.status).toEqual(200);
        done();
      })
  });

});
