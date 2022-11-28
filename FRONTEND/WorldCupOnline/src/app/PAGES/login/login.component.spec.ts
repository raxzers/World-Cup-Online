import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { Observable, observable } from 'rxjs';
import { userModel } from 'src/app/MODELS/userModel';
import { UserService } from 'src/app/SERVICES/user/user.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: UserService
  let user:userModel;
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
      expect(JSON.stringify(data)).toBe(JSON.stringify('admin'));
   //   expect(userService.IsLoggedIn()).toBe("admin");
    });  
    loginComponent.enter('admingod','abcd1234');
    localStorage.setItem('rol','admin')
    expect(localStorage.getItem('rol')).toBe('admin')
    
   
  });
  
});
