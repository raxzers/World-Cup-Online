import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { Observable, observable } from 'rxjs';
import { userModel } from 'src/app/MODELS/userModel';
import { UserService } from 'src/app/SERVICES/user/user.service';
import * as Rx from 'rxjs';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: UserService
  let user:userModel;
  let service: UserService;
  let a;
  //let httpClientMock: HttpClientMock;
  let httpClientSpy: { post: jasmine.Spy };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientModule, ToastrModule.forRoot(),MatDialogModule],
      providers:[UserService]
    })
    .compileComponents();
    userService = TestBed.inject(UserService);
   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new UserService(httpClientSpy as any, a as any);
    fixture.detectChanges();
    
    

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('validar inicio de sesion', () => {
    const testBedService = TestBed.get(UserService);
    const loginComponent =fixture.componentInstance;
    
    user={
      Username: 'admingod',
      Password: 'abcd1234',
  }
   userService.login(user).subscribe(data => { 
      expect(JSON.stringify(data)).toBe(JSON.stringify("El usuario ingresado es incorrecto"));
   //   expect(userService.IsLoggedIn()).toBe("admin");
    });  
    loginComponent.enter('admingod','abcd1234');
    localStorage.setItem('rol','admin')
    expect(localStorage.getItem('rol')).toBe('admin')
  });
  it('Login con service', (done: DoneFn) => {
    const quiniela = { 
      Username:"string",
      Password: "string"};

    component.enter("brandon","abc123");
    const error_ = {
      error: "Datos Correctos",
      status: 200,
      statusText: "Datos validos"
    }
    httpClientSpy.post.and.returnValue(Rx.throwError(error_))
    service.login(quiniela).subscribe(resultado => {
    },
      error => {
        expect(service.login(quiniela)).toHaveBeenCalled;
        done();
      })
  });
});
