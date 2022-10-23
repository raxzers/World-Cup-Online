import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/SERVICES/team/team.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  seleccionesForm: FormGroup;
  fechaInicioForm: FormGroup;
  fechaFinalForm: FormGroup;
  equiposForm: FormGroup;
  arrayEquipos:[];
//ACA hay problemas 
  constructor(private formBuilder: FormBuilder,private router:Router, private equipoService:TeamService) {
    this.arrayEquipos=[]; //Quitar este ****
    this.seleccionesForm = this.formBuilder.group({})
    this.fechaInicioForm = this.formBuilder.group({})
    this.fechaFinalForm = this.formBuilder.group({})
    this.equiposForm = this.formBuilder.group({})

  }

  ngOnInit(): void {
    
      this.fechaInicioForm=this.formBuilder.group({
      fechaInicioControl:[]
    })
    this.fechaFinalForm=this.formBuilder.group({
      fechaFinalControl:[]
    }) 
    this.equiposForm=this.formBuilder.group({
      equiposControl:[]
    }) 
  }
  getValue(){}

  to_new_football_game(){
    this.router.navigate(['/new_football_game']);
  }

}
