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



  it('tamaño de un array', () => {
    const lista = component.listaTest;
    expect(lista).toHaveSize(4);

  });

  it('validar un formControl', () => {
    const email = component.testForm.controls['testControl']
    email.setValue('usuario@correo.com')
    expect(component.testForm.invalid).toBeTrue();
  });

  it('validar contenido(string) de un input(html)', () => {
    const sede = fixture.debugElement.nativeElement.querySelector('[data-testid="input_test"]');
    expect(sede.textContent).toBe('');
  });

});
