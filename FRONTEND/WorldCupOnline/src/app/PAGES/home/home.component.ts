import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { seleccionModel } from 'src/app/MODELS/seleccionModel';
import { teamModel } from 'src/app/MODELS/teamModel';
import { torneoEquipoModel } from 'src/app/MODELS/torneoEquipoModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { TeamService } from 'src/app/SERVICES/team/team.service';
import { TorneoServiceService } from 'src/app/SERVICES/torneo/torneo-service.service';




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
  nombreTorneoForm: FormGroup;
  reglasForm: FormGroup;

  arrayEquipos: any[];
  nombresEquipos: any[];
  nombreEquipoSeleccionado: any[];

  equiposTorneo: any[];
  btnState: boolean = false;
  numlength: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, public equipoService: TeamService, private torneoService: TorneoServiceService) { }

  ngOnInit(): void {
    this.equipoService.obtenerClubs();
    this.arrayEquipos = [];
    this.nombresEquipos = [];
    this.equiposTorneo = [];

    this.reglasForm = this.formBuilder.group({
      reglasControl: ['', [Validators.maxLength(1000)]]
    })

    this.nombreTorneoForm = this.formBuilder.group({
      nombreTorneo: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5)]]
    })
    this.fechaInicioForm = this.formBuilder.group({
      fechaInicioControl: ['', [Validators.required]]
    })
    this.fechaFinalForm = this.formBuilder.group({
      fechaFinalControl: ['', [Validators.required]]
    })
    this.equiposForm = this.formBuilder.group({
      equiposControl: []
    })

    this.categoriaForm = this.formBuilder.group({
      categoriaControl: ['', [Validators.required]]
    })
    this.obtenerSeleccion()
  }
  onInput() {
    if (this.numlength.length < 5) {
      this.toastr.warning("El nombre debe ser entre 5 y 30 caracteres")
      this.btnState = true;
    }
    else {
      this.btnState = false;
    }
  }
  eliminarEquipo(equipo) {
    console.log(equipo);
    if (confirm('Desea eliminar este equipo?')) {
      const newArr: any[] = this.equiposTorneo.filter((element) => {
        return element != equipo;
      })
      this.equiposTorneo = newArr;
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
    var booleano = false;
    ///  console.log(this.equiposTorneo.length)
    if (this.equiposTorneo.length != 0) {
      for (let i = 0; i < this.equiposTorneo.length; i++) {
        console.log(this.equiposTorneo[i])
        if (this.equiposTorneo[i] == nombreSeleccionado) {
          booleano = true;
          this.toastr.warning("El equipo que desea agregar ya se encuentra en la tabla", "Favor seleccionar otro")
        }
      }
      if (!booleano) { this.equiposTorneo.push(nombreSeleccionado); }
    } else {
      this.equiposTorneo.push(nombreSeleccionado);
    }
    // console.log(nombreSeleccionado);
  }
  getValue() {
    console.log(this.equiposForm.value)
  }
  guardarTorneo() {
    if (this.equiposTorneo.length >= 2) {
      console.log(this.categoriaForm.get('categoriaControl').value);
      const torneo: torneoModel = {
        ID: "1",
        Nombre: this.nombreTorneoForm.get('nombreTorneo').value,
        Fecha_inicio: this.fechaInicioForm.get('fechaInicioControl').value,
        Fecha_fin: this.fechaFinalForm.get('fechaFinalControl').value,
        Equipos: 'seleccion',
        Reglas: this.reglasForm.get("reglasControl").value,
      }
      console.log(torneo)
      this.torneoService.guardarTorneo(torneo).subscribe(data => {
        this.toastr.success('Torneo agregado exitosamente', 'Torneo Guardado')
      })
      for (let i = 0; i < this.equiposTorneo.length; i++) {
        const torneoEquipo: torneoEquipoModel = {
          id: "1",
          Torneo: this.nombreTorneoForm.get('nombreTorneo').value,
          Equipo: this.equiposTorneo[i],
        }
        this.torneoService.guardarTorneoEquipos(torneoEquipo).subscribe(data => {
          this.toastr.success('Torneo y Equipo ADDED')
        })
      }
    }
    else { this.toastr.error('Se necesitan 2 o más equipos para crear el torneo','Favor Agregar más equipos') }

  }
  to_new_football_game() {
    this.router.navigate(['/new_football_game']);
  }

}

