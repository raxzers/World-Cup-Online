import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';

import { LlenarQuinielaComponent } from './llenar-quiniela.component';

describe('LlenarQuinielaComponent', () => {
  let component: LlenarQuinielaComponent;
  let fixture: ComponentFixture<LlenarQuinielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlenarQuinielaComponent ],
      imports:[ReactiveFormsModule,ToastrModule.forRoot(),HttpClientModule,MatDialogModule, ReactiveFormsModule, MatIconModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LlenarQuinielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  ////////////////////////////////////////////////////////////////////////////////////
  /*
    it('validar que la cantidad de torneos sea mayor a cero', () => {
      const lista = component.torneox;
      expect(Boolean(lista.length)).toBe(true);
    });
  
    it('validar un formControl', () => {
      const email = component.testForm.controls['testControl']
      email.setValue('usuario@correo.com')
      expect(component.testForm.invalid).toBeTrue();
    });
    */
});
