import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comunidadModel } from 'src/app/MODELS/comunidadModel';
import { teamModel } from 'src/app/MODELS/teamModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { TorneoServiceService } from 'src/app/SERVICES/torneo/torneo-service.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  guardarLiga:FormGroup;
  arrayEquipos: any[];
  torneos:any[];
  constructor(private formBuilder: FormBuilder, private torneoService: TorneoServiceService) { }
  
  ngOnInit(): void {
    this.torneos=[];
    this.arrayEquipos=[];
    this.guardarLiga= this.formBuilder.group({
      nombreComunidad: ['', [Validators.required]]
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
    const comunidad:comunidadModel={
      NombreComunidad:this.guardarLiga.get('nombreComunidad').value,
      Usuario:this.guardarLiga.get('nombreComunidad').value,
      Torneo:this.guardarLiga.get('nombreComunidad').value,
      
    }
  }

}
