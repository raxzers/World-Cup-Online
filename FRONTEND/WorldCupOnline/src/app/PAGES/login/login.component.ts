import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void { }

  hide = true;

  public enter(user: string, password: string) {
    if(user=="x" && password=="123"){
      this.router.navigate(['/home']); 
    }
    else{
      this.toastr.warning("usuario no permitido");
    }
         
  };
}
