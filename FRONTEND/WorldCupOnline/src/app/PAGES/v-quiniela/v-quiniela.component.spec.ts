import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';

import { VQuinielaComponent } from './v-quiniela.component';

describe('VQuinielaComponent', () => {
  let component: VQuinielaComponent;
  let fixture: ComponentFixture<VQuinielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VQuinielaComponent ],
      imports:[ReactiveFormsModule,ToastrModule.forRoot(),HttpClientModule,MatDialogModule, ReactiveFormsModule, MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VQuinielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
