import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { faseModel } from 'src/app/MODELS/faseMode';
import { rankingModel } from 'src/app/MODELS/rankingModel';
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
  faseForm: FormGroup;

  arrayEquipos: any[];
  nombresEquipos: any[];
  nombreEquipoSeleccionado: any[];
  fases: any[];

  equiposTorneo: any[];
  btnState: boolean = false;
  btnStateFase: boolean = false;
  numlength: any;
  numlength2: any;
  condiciones:any[];

  tipoEquipo:string;
  faseCondicion: boolean = false;

  nombreTorneoCondicion: boolean = false;
  fechaInicioCondicion: boolean = false;
  fechaFinalCondicion: boolean = false;
  tipoEquipoCondicion: boolean = false;
  fechaInicioActualCondicion:boolean=false;
  fechaCalzanCondicion:boolean=false;

  private fechaActual= new Date();
  
  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, public equipoService: TeamService,
    private torneoService: TorneoServiceService) { }

  ngOnInit(): void {
    this.equipoService.obtenerClubs();
    this.arrayEquipos = [];
    this.nombresEquipos = [];
    this.equiposTorneo = [];
    this.fases = [];
    this.condiciones=[];

    this.faseForm = this.formBuilder.group({
      faseControl: ['', [Validators.required]]
    })
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
  onInput2() {
    if (this.numlength2.length < 5) {
      this.toastr.warning("El nombre debe ser entre 5 y 30 caracteres")
      this.btnStateFase = true;
    }
    else {
      this.btnStateFase = false;
    }
  }
  verificarNombre(){
    console.log(this.nombreTorneoForm.get('nombreTorneo').value)
    if (this.nombreTorneoForm.get('nombreTorneo').value==undefined) {
      this.nombreTorneoCondicion = true;
    } else {
      this.nombreTorneoCondicion = false;
    }
  }
  verificarFases(){
    if (this.fases.length <= 0) {
      this.faseCondicion = true;
    } else {
      this.faseCondicion = false;
    }
  }
  verificarFechas(){
    if (this.fechaInicioForm.get('fechaInicioControl').value == "") {
      this.fechaInicioCondicion = true;
    } else {
      this.fechaInicioCondicion = false;
    }
    if (this.fechaFinalForm.get('fechaFinalControl').value == "") {
      this.fechaFinalCondicion = true;
    } else {
      this.fechaFinalCondicion = false;
    }
  }
  verificarTipoEquipo(){
    var nombres = (document.getElementById("tipoEquipos")) as HTMLSelectElement;
    var nombreSeleccionado = nombres.selectedIndex;
    console.log(nombreSeleccionado)
    if (nombreSeleccionado== -1) {
      this.tipoEquipoCondicion = true;
    } else {
      this.tipoEquipoCondicion = false;
    }
  }
  verificarFechaActual(){
    const fechaInicioComp = new Date(this.fechaInicioForm.get('fechaInicioControl').value);
    const fechaFinalComp = new Date(this.fechaFinalForm.get('fechaFinalControl').value);
    
    console.log(fechaInicioComp);
   
    const fechaComparador = this.fechaActual;
    console.log(fechaComparador);
    if(fechaComparador > fechaInicioComp){
        this.fechaInicioActualCondicion=true;
       // this.toastr.warning("La fecha no puede ser pasada a la actual");
     }else{
      this.fechaInicioActualCondicion=false;
     }
   
  }
  verificarFechaActual2(){
    const fechaInicioComp = new Date(this.fechaInicioForm.get('fechaInicioControl').value);
    const fechaFinalComp = new Date(this.fechaFinalForm.get('fechaFinalControl').value);
    if(fechaInicioComp > fechaFinalComp){
      this.fechaCalzanCondicion=true;
     // this.toastr.warning("La fecha de inicio no puede ser mayor a la fecha de finalizacion");
    }else{
      this.fechaCalzanCondicion=false;
    }
  }
  verificarCondiciones() {
    this.condiciones = [
      this.faseCondicion,
      this.nombreTorneoCondicion,
      this.fechaInicioCondicion,
      this.fechaFinalCondicion,
      this.tipoEquipoCondicion,
      this.fechaInicioActualCondicion,
      this.fechaCalzanCondicion,
    ]
  

   
    console.log(this.condiciones)
    if (this.condiciones.includes(true)) {
      if (this.condiciones[0] == true) {
        this.toastr.warning("Se necesita al menos una fase")
      }
      if (this.condiciones[1] == true) {
        this.toastr.warning("Se necesita el nombre del torneo")
      }
      if (this.condiciones[2] == true) {
        this.toastr.warning("Se necesita una fecha de inicio valida")
      } 
      if (this.condiciones[3] == true) {
        this.toastr.warning("Se necesita una fecha final valida")
      }
      if (this.condiciones[4] == true) {
        this.toastr.warning("Seleccione el tipo de equipo")
      }if (this.condiciones[5] == true) {
        this.toastr.warning("La fecha no puede ser pasada a la actual")
      }
      if (this.condiciones[6] == true) {
        this.toastr.warning("La fecha de inicio debe ser mayor a la de finalizacion")
      }
      return false
    } else {
      return true
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
    }
  }
  eliminarFase(fase) {
    //console.log(fase);
    if (confirm('Desea eliminar este equipo?')) {
      const newArr: any[] = this.fases.filter((element) => {
        return element != fase;
      })
      this.fases = newArr;
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
      this.tipoEquipo="Seleccion";
    }
    else {
      this.obtenerClub();
      this.tipoEquipo="Club";
    }
  }
  getEquipotoAdd() {
    var nombres = (document.getElementById("equipos")) as HTMLSelectElement;
    var nombreSeleccionado = nombres.value;
    var booleano = false;

    if (nombreSeleccionado != "") {
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
    } else {
      this.toastr.warning("El equipo que desea no existe", "Favor seleccionar otro")
    }
    // console.log(nombreSeleccionado);
  }
  getValue() {
    console.log(this.equiposForm.value)
  }
  guardarTorneo() {
    this.verificarFases();
    this.verificarNombre();
    this.verificarFechas();
    this.verificarTipoEquipo();
    this.verificarFechaActual();
    this.verificarFechaActual2();
    if (this.verificarCondiciones()) {
      if (this.equiposTorneo.length >= 2) {
        console.log(this.categoriaForm.get('categoriaControl').value);
        const torneo: torneoModel = {
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
        setTimeout(() => { this.guardarEquipos(); }, 500);
        setTimeout(() => { this.guardarFaseFinal(); }, 600);
        setTimeout(() => { this.crearRanking(); }, 700);

      }
      else { this.toastr.error('Se necesitan 2 o más equipos para crear el torneo', 'Favor Agregar más equipos') }
    } else {
      this.toastr.error('Faltan datos o no cumplen con los requesitos necesarios', 'Favor Completar Datos')
    }
  }
  crearRanking() {
    const ranking: rankingModel = {
      Torneo: this.nombreTorneoForm.get('nombreTorneo').value,
      Username: "Carlos",
      Puntaje: 800,
    }

    this.torneoService.crearRanking(ranking).subscribe(data => {
      this.toastr.success('Ranking PAPUlince')
    })

  }
  guardarEquipos() {
    for (let i = 0; i < this.equiposTorneo.length; i++) {
      const torneoEquipo: torneoEquipoModel = {
        Torneo: this.nombreTorneoForm.get('nombreTorneo').value,
        Equipo: this.equiposTorneo[i],
      }
      console.log(torneoEquipo);
      this.torneoService.guardarTorneoEquipos(torneoEquipo).subscribe(data => {
        this.toastr.success('Torneo y Equipo ADDED')
      })
    }
  }
  guardarFase() {
    var nombreFase = this.faseForm.get('faseControl').value;
    this.fases.push(nombreFase);
    // console.log(this.fases)
  }
  guardarFaseFinal() {
    for (let i = 0; i < this.fases.length; i++) {
      const fase: faseModel = {
        Torneo: this.nombreTorneoForm.get('nombreTorneo').value,
        Fase: this.fases[i],
      }
      console.log(fase);
      this.torneoService.guardarFase(fase).subscribe(data => {
        this.toastr.success('FASE GOOOD')
      })

    }
  }
  to_new_football_game() {
    this.router.navigate(['/new_football_game']);
  }

}

