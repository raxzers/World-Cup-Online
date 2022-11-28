import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';

import { VRankingComponent } from './v-ranking.component';

describe('VRankingComponent', () => {
  let component: VRankingComponent;
  let fixture: ComponentFixture<VRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VRankingComponent ],
      imports:[ReactiveFormsModule,ToastrModule.forRoot(),HttpClientModule,MatDialogModule, ReactiveFormsModule, MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
