import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { VQuinielaComponent } from './v-quiniela.component';

describe('VQuinielaComponent', () => {
  let component: VQuinielaComponent;
  let fixture: ComponentFixture<VQuinielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VQuinielaComponent ],
      imports:[HttpClientModule, ToastrModule.forRoot()]
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
