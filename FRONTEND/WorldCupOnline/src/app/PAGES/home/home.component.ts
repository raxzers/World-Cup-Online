import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { seleccionModel } from 'src/app/MODELS/seleccionModel';
import { teamModel } from 'src/app/MODELS/teamModel';
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
  categoriaForm: FormGroup;
  arrayEquipos: any[];
  nombresEquipos: any[];
  nombreEquipoSeleccionado: any[];

  equiposTorneo: any[];

  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, public equipoService: TeamService) { }

  ngOnInit(): void {
    this.equipoService.obtenerClubs();
    this.arrayEquipos = [];
    this.nombresEquipos = [];
    this.equiposTorneo = [];

    this.fechaInicioForm = this.formBuilder.group({
      fechaInicioControl: []
    })
    this.fechaFinalForm = this.formBuilder.group({
      fechaFinalControl: []
    })
    this.equiposForm = this.formBuilder.group({
      equiposControl: []
    })

    this.categoriaForm = this.formBuilder.group({
      categoriaControl: []
    })
    this.obtenerSeleccion()
  }
  eliminarEquipo(equipo) {
    console.log(equipo);
    if (confirm('Desea eliminar este equipo?')) {
      const newArr:any[] =this.equiposTorneo.filter((element)=>{
       return element!=equipo;
      })
      this.equiposTorneo= newArr;
      console.log(newArr);
      const index = this.equipoService.list.indexOf(equipo);
      this.equipoService.list.splice(index, 1);
      this.equipoService.eliminarCliente(equipo).subscribe(data => {
        this.toastr.warning('Eliminar Exitoso', 'Equipo Eliminado');
        this.equipoService.obtenerClubs();
      })
    }
  }
  obtenerClub() {
    this.nombresEquipos = [];
    this.equipoService.obtenerClubs1().then(data => {
      this.arrayEquipos as teamModel[];
      this.arrayEquipos = data as teamModel[];
      for (let equipo of this.arrayEquipos) {
        var nombreEquipo = equipo.Club;
        this.nombresEquipos.push(nombreEquipo);
      }

    });
  }
  obtenerSeleccion() {
    this.nombresEquipos = [];
    this.equipoService.obtenerSelecciones1().then(data => {
      this.arrayEquipos as seleccionModel[];
      this.arrayEquipos = data as seleccionModel[];
      for (let equipo of this.arrayEquipos) {
        var nombreEquipo = equipo.Seleccion;

        this.nombresEquipos.push(nombreEquipo);
      }

    });
  }
  getTipoEquipo() {
    var nombres = (document.getElementById("tipoEquipos")) as HTMLSelectElement;
    var nombreSeleccionado = nombres.selectedIndex;
    this.equiposTorneo = [];
    if (nombreSeleccionado == 0) {
      this.obtenerSeleccion();
    }
    else {
      this.obtenerClub();
    }
  }
  getEquipotoAdd() {
    var nombres = (document.getElementById("equipos")) as HTMLSelectElement;
    var nombreSeleccionado = nombres.value;
    var booleano=false;
    console.log(this.equiposTorneo.length)
    if (this.equiposTorneo.length != 0) {
      for (let i = 0; i < this.equiposTorneo.length; i++) {
        console.log(this.equiposTorneo[i])
        if (this.equiposTorneo[i] == nombreSeleccionado) {
          booleano=true;
          this.toastr.warning("El equipo que desea agregar ya se encuentra en la tabla","Favor seleccionar otro")
        }
      }
      if(!booleano){this.equiposTorneo.push(nombreSeleccionado);}
    }else{
      this.equiposTorneo.push(nombreSeleccionado);
    }
    console.log(nombreSeleccionado);
  }
  getValue() {
    console.log(this.equiposForm.value)
  }
  guardarTorneo() {

  }
  to_new_football_game() {
    this.router.navigate(['/new_football_game']);
  }

}

