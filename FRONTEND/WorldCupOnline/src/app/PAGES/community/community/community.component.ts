import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { comunidadModel } from 'src/app/MODELS/comunidadModel';
import { communityGetModel, joinCommModel } from 'src/app/MODELS/getComunityModel';
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
  guardarLiga: FormGroup;
  ingresarComunidad: FormGroup;
  arrayEquipos: any[];
  arrayComunidades: any[];
  torneos: any[];
  comunidades: any[];
  paisCondicion: boolean = true;
  codigo: string;
  nombreTorneoCondicion: boolean = false;

  constructor(private formBuilder: FormBuilder, private torneoService: TorneoServiceService, private comunidadService: ComunidadService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.torneos = [];
    this.comunidades = [];
    this.arrayEquipos = [];
    this.arrayComunidades = [];
    this.guardarLiga = this.formBuilder.group({
      nombreComunidad: ['', [Validators.required]]
    })
    this.ingresarComunidad = this.formBuilder.group({
      codigoControl: ['', [Validators.required]]
    })

    this.obtenerNombresTorneos();
    this.obtenerComunidades();
  }
  unirseComunidad() {
    var usuario = localStorage.getItem('usuario');
    var torneo = (document.getElementById("torneos")) as HTMLSelectElement;
    console.log(usuario);
    const comunidad: joinCommModel = {
      COD_Invita: this.ingresarComunidad.get('codigoControl').value,
      Usuario: usuario,
    }
    console.log(comunidad);
    this.comunidadService.unirseComunidad(comunidad).subscribe(data => {
      this.toastr.warning(JSON.stringify(data));
      if (JSON.stringify(data) == 'null') {
        this.toastr.success('Se ha unido a la comunidad', 'Agregada Exitosamente');
      }
    })
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
  obtenerComunidades() {
    this.comunidades = [];
    this.comunidadService.getComunidades(localStorage.getItem('usuario')).then(data => {
      this.arrayComunidades as communityGetModel[];
      this.arrayComunidades = data as communityGetModel[];
      console.log(this.arrayComunidades)
      for (let equipo of this.arrayComunidades) {
        var nombreEquipo = equipo.Nombre;
        this.comunidades.push(nombreEquipo);
      }

    });
  }
  obtenerCodigo(codigo) {
    console.log("Entra");
    this.codigo = codigo;
  }
  verificarNombreComunidad() {
    console.log(this.guardarLiga.get('nombreComunidad').value)
    if (this.guardarLiga.get('nombreComunidad').value == '') {
      console.log(this.guardarLiga.get('nombreComunidad').value);
      return true;
    } else {
      console.log(this.guardarLiga.get('nombreComunidad').value);
      return false;
    }
  }
  verificarTorneoSeleccionado() {
    var nombres = (document.getElementById("torneos")) as HTMLSelectElement;
    var nombreSeleccionado = nombres.selectedIndex;
    console.log(nombreSeleccionado)
    if (nombreSeleccionado == -1) {
      this.paisCondicion = true;
    } else {
      this.paisCondicion = false;
    }
  }
  guardarComunidad() {
    this.verificarTorneoSeleccionado();
    if (this.verificarNombreComunidad() == false && this.paisCondicion == false) {
      var usuario = localStorage.getItem('usuario');
      var torneo = (document.getElementById("torneos")) as HTMLSelectElement;
      console.log(usuario);
      const comunidad: comunidadModel = {
        NombreComunidad: this.guardarLiga.get('nombreComunidad').value,
        Usuario: usuario,
        NombreTorneo: torneo.value,
      }
      console.log(comunidad);
      this.comunidadService.guardarComunidad(comunidad).subscribe(data => {
        this.toastr.warning(JSON.stringify(data));
        if (JSON.stringify(data) == 'null') {
          this.toastr.success('Comunidad Creada', 'Agregada Exitosamente');
        }
      })
    } else {
      this.toastr.warning('Favor Completar Datos', 'La comunidad necesita un nombre');
    }
  }

}
