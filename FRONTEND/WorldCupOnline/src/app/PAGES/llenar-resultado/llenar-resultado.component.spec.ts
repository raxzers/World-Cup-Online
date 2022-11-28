import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';

import { LlenarResultadoComponent } from './llenar-resultado.component';

describe('LlenarResultadoComponent', () => {
  let component: LlenarResultadoComponent;
  let fixture: ComponentFixture<LlenarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlenarResultadoComponent ],
      imports:[ReactiveFormsModule,ToastrModule.forRoot(),HttpClientModule, MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        
     ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlenarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
