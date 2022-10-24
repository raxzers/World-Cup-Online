import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { teamModel } from 'src/app/MODELS/Team';
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
  arrayEquipos: any[];
  nombresEquipos:any[];
 
  constructor(private formBuilder: FormBuilder,private router:Router,private toastr:ToastrService, public  equipoService:TeamService) {}

  ngOnInit(): void {
    this.equipoService.obtenerClubs();
    this.arrayEquipos=[];
    this.nombresEquipos=[];

    this.fechaInicioForm=this.formBuilder.group({
      fechaInicioControl:[]
    })
    this.fechaFinalForm=this.formBuilder.group({
      fechaFinalControl:[]
    }) 
    this.equiposForm=this.formBuilder.group({
      equiposControl:[]
    }) 
    this.obtenerSucursal();
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
  obtenerSucursal() {
    
    this.equipoService.obtenerClubs1().then(data => {
      this.arrayEquipos as teamModel[];
      this.arrayEquipos = data as teamModel[];
      for (let equipo of this.arrayEquipos) {
        var nombreEquipo = equipo.Club;
        console.log(nombreEquipo)
        this.nombresEquipos.push(nombreEquipo);
     }
  
    });
  }
  getValue(){
   // this.obtenerSucursal();
   // this.obtenerSucursal();
    //console.log(this.equiposForm.value);
  }

  to_new_football_game(){
    this.router.navigate(['/new_football_game']);
  }

}

