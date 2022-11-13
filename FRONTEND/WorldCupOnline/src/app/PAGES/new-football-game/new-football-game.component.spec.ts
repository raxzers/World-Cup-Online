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
      declarations: [ NewFootballGameComponent ],
      imports:[HttpClientModule, ToastrModule.forRoot(),ReactiveFormsModule]
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
});
