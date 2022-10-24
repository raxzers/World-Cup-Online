import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
 
  constructor(private formBuilder: FormBuilder,private router:Router,private toastr:ToastrService, public equipoService:TeamService) {
    this.arrayEquipos=[]; 
    this.seleccionesForm = this.formBuilder.group({})
    this.fechaInicioForm = this.formBuilder.group({})
    this.fechaFinalForm = this.formBuilder.group({})
    this.equiposForm = this.formBuilder.group({})

  }

  ngOnInit(): void {
    this.equipoService.obtenerClubs();
    
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
  eliminarEquipo(id){
    if(confirm('Desea eliminar este equipo?')){
    const index = this.equipoService.list.indexOf(id);
     this.equipoService.list.splice(index,1);
      this.equipoService.eliminarCliente(id).subscribe(data=>{
         this.toastr.warning('Eliminar Exitoso', 'Equipo Eliminado');
 
         this.equipoService.obtenerClubs();
      })
    }
   }
  getValue(){}

  to_new_football_game(){
    this.router.navigate(['/new_football_game']);
  }

}

