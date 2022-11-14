import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { LlenarQuinielaComponent } from './llenar-quiniela.component';

describe('LlenarQuinielaComponent', () => {
  let component: LlenarQuinielaComponent;
  let fixture: ComponentFixture<LlenarQuinielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlenarQuinielaComponent ],
      imports:[HttpClientModule, ToastrModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlenarQuinielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
