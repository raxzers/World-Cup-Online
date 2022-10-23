import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  seleccionesForm: FormGroup;
  fechaInicioForm: FormGroup;
  fechaFinalForm: FormGroup;
//ACA hay problemas 
  constructor(private formBuilder: FormBuilder,private router:Router) { 
    this.seleccionesForm = this.formBuilder.group({})
    this.fechaInicioForm = this.formBuilder.group({})
    this.fechaFinalForm = this.formBuilder.group({})
    

  }

  ngOnInit(): void {
      this.fechaInicioForm=this.formBuilder.group({
      fechaInicioControl:[]
    })
    this.fechaFinalForm=this.formBuilder.group({
      fechaFinalControl:[]
    }) 
    
  }

  to_new_football_game(){
    this.router.navigate(['/new_football_game']);
  }

}
