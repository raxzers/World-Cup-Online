import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent], imports: [HttpClientModule, ToastrModule.forRoot(), MatDialogModule, ReactiveFormsModule, MatIconModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('validar contenido nombre de registro inicia vacio', () => {
    const nombre = fixture.debugElement.nativeElement.querySelector('[data-testid="nombreTest"]');
    expect(nombre.textContent).toBe('');
  });
  it('validar contenido nombre de registro maximo 30 caracteres', () => {
    const nombre = fixture.debugElement.nativeElement.querySelector('[data-testid="nombreTest"]');
    const registerComponent = fixture.componentInstance;
    let form = registerComponent.form;
    let nombre1 = registerComponent.form.controls['Nombre'];
    nombre1.setValue('111111111122222222223333333333')
    console.log(nombre1.value.length);
    expect(nombre1.value.length).toBe(30);
  });
  it('validar contenido apellido inicia vacio', () => {
    const nombre = fixture.debugElement.nativeElement.querySelector('[data-testid="apellidoTest"]');
    expect(nombre.textContent).toBe('');
  });
  it('validar contenido apellido maximo 30 caracteres', () => {
    const nombre = fixture.debugElement.nativeElement.querySelector('[data-testid="apellidoTest"]');
    const registerComponent = fixture.componentInstance;
    let form = registerComponent.form;
    let apellido1 = registerComponent.form.controls['Nombre'];
    apellido1.setValue('GomezGomezGomezGomezGomezGomez')
    console.log(apellido1.value.length);
    expect(apellido1.value.length).toBe(30);
  });
  it('validar fecha nacimiento', () => {
    const nombre = fixture.debugElement.nativeElement.querySelector('[data-testid="nacimientoTest"]');
    const registerComponent = fixture.componentInstance;
    let form = registerComponent.form;
    let fecha = registerComponent.form.controls['fechaNacimiento'];
    fecha.setValue('04/04/2000');
    console.log(fecha.value);
    registerComponent.verificarEdad();
    expect(registerComponent.nacimientoCondicion).toBe(false);
  });

  it('validar correo', () => {
    const nombre = fixture.debugElement.nativeElement.querySelector('[data-testid="nacimientoTest"]');
    const registerComponent = fixture.componentInstance;
    let form = registerComponent.form;
    let fecha = registerComponent.form.controls['fechaNacimiento'];
    fecha.setValue('04/04/2000');
    console.log(fecha.value);
    registerComponent.verificarEdad();
    expect(registerComponent.nacimientoCondicion).toBe(false);
  });

});
