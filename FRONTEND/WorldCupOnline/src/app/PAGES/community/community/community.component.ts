import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { comunidadModel } from 'src/app/MODELS/comunidadModel';
import { teamModel } from 'src/app/MODELS/teamModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { ComunidadService } from 'src/app/SERVICES/comunidad/comunidad.service';
import { TorneoServiceService } from 'src/app/SERVICES/torneo/torneo-service.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  guardarLiga:FormGroup;
  ingresarComunidad:FormGroup;
  arrayEquipos: any[];
  torneos:any[];
  constructor(private formBuilder: FormBuilder, private torneoService: TorneoServiceService, private comunidadService:ComunidadService, private toastr:ToastrService) { }
  
  ngOnInit(): void {
    this.torneos=[];
    this.arrayEquipos=[];
    this.guardarLiga= this.formBuilder.group({
      nombreComunidad: ['', [Validators.required]]
    })
    this.ingresarComunidad= this.formBuilder.group({
      codigoControl: ['', [Validators.required]]
    })
    this.obtenerNombresTorneos();
  }
  obtenerNombresTorneos() {
    this.torneos = [];
    this.torneoService.obtenerTorneos().then(data => {
      this.arrayEquipos as torneoModel[];
      this.arrayEquipos = data as torneoModel[];
      for (let equipo of this.arrayEquipos) {
        var nombreEquipo = equipo.Nombre;
        this.torneos.push(nombreEquipo);
      }

    });
   
  }
  guardarComunidad(){
    var usuario=localStorage.getItem('usuario');
    var torneo = (document.getElementById("torneos")) as HTMLSelectElement;
    console.log(usuario);
    const comunidad:comunidadModel={
      NombreComunidad:this.guardarLiga.get('nombreComunidad').value,
      Usuario:usuario,
      NombreTorneo:torneo.value,
    }
    console.log(comunidad);
    this.comunidadService.guardarComunidad(comunidad).subscribe(data => {
      this.toastr.warning(JSON.stringify(data));
      if(JSON.stringify(data)=='null'){
        this.toastr.success('Usuario Registrado', 'Agregado Exitosamente');
      }
    })

  }

}
