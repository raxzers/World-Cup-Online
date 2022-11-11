import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleGuardGuard } from 'src/app/core/guards/role-guard.guard';
import { userModel } from 'src/app/MODELS/userModel';
import { UserService } from 'src/app/SERVICES/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private toastr: ToastrService,private userService:UserService, roleguard:RoleGuardGuard) { localStorage.clear()}

  ngOnInit(): void { }

  hide = true;
  message:String;

  public enter(user: string, password: string) {
  //  if(user=="x" && password=="123"){
 //     this.router.navigate(['/home']); 
  //  }
  //  else{
   //   this.toastr.warning("usuario no permitido");
  //  }
    const usuario: userModel = {
      Username: user,
      Password: password,
    }
    this.userService.login(usuario).subscribe(data => {
      localStorage.setItem('rol',JSON.stringify(data));
   
    //  console.log(JSON.stringify(data));
      this.router.navigate(['/home']);
    ///  this.toastr.success('Iniciando Sesión...', 'Inicio de Sesión Exitoso');
    
    })
  
        
  };
}
