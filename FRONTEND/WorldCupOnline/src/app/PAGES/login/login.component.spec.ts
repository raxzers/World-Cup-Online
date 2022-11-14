import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from 'src/app/SERVICES/user/user.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientModule, ToastrModule.forRoot(),MatDialogModule],
      providers:[UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('validar correo', () => {
    const loginComponent =fixture.componentInstance;
    let correo= loginComponent.enter('Traznar','papugod');
    let debugElement= fixture.debugElement;
    let authService= debugElement.injector.get(UserService);
    let loginSpy = spyOn(authService, 'login').and.callThrough();
    let loginSpy2 = spyOn(authService, 'IsLoggedIn').and.callThrough();
    expect(loginComponent.enter('Traznar','papugod')).toBe();
  });
});
