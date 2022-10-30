import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { gameModel } from 'src/app/MODELS/gameModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { torneo_equipo_Model } from 'src/app/MODELS/torneo_equipo_Model';
import { torneo_fase_Model } from 'src/app/MODELS/torneo_fase_Model';
import { GameService } from 'src/app/SERVICES/game/game.service';


@Component({
  selector: 'app-new-football-game',
  templateUrl: './new-football-game.component.html',
  styleUrls: ['./new-football-game.component.scss']
})
export class NewFootballGameComponent implements OnInit {

  fechaInicioForm: FormGroup;
  fechaInicioActualCondicion:boolean=false;
  private fechaActual= new Date();
  fechaInicioCondicion: boolean = false;

  torneos:torneoModel[];
  nombre_torneos:string[] = [];
  torneo_actual:torneoModel;

  equipos:torneo_equipo_Model[];
  nombre_equipos:string[] = [];

  fases:torneo_fase_Model[];
  nombre_fases:string[] = [];


  nuevo_partido:gameModel={ Fecha: null, Hora: '', Nombre_Torneo: '', Fase: '', Equipo_1: '', Equipo_2: '', Sede: '', Estado_del_partido: 'pendiente' };

  constructor(private router:Router, public partidoService:GameService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  verificarFechasx(){
    if (this.fechaInicioForm.get('fechaInicioControl').value == "") {
      this.fechaInicioCondicion = true;
    } else {
      this.fechaInicioCondicion = false;  
    }  
  }

  verificarFechas(fecha:Date){
    if(fecha < this.torneo_actual.Fecha_inicio){
      this.toastr.warning("la fecha es anterior al inicio del torneo");
      return 1;
    }
    else if(fecha > this.torneo_actual.Fecha_fin){
      this.toastr.warning("La fecha esta despues de finalizado el partido");
      return 2;
    }
    else{
      return 0;
    }  
  }

  verificarFechaActual(){
    const fechaInicioComp = new Date(this.fechaInicioForm.get('fechaInicioControl').value);
    
    console.log(fechaInicioComp);
   
    const fechaComparador = this.fechaActual;
    console.log(fechaComparador);
    if(fechaComparador > fechaInicioComp){
        this.fechaInicioActualCondicion=true;
        this.setFechaInicio();
     }else{
      this.fechaInicioActualCondicion=false;
     }
  }
  
  verificar_partido(partido:gameModel){
    if(partido.Nombre_Torneo=='' || partido.Fecha==null || partido.Hora=='' || partido.Fase=='' || partido.Equipo_1=='' || partido.Equipo_2=='' || partido.Sede==''){
      this.toastr.warning("Debe completar todos los datos, verifique y vuelva a intentar");
      return false;
    }
    else if(this.verificarFechas(partido.Fecha)==1){
      return false;
    }
    else if(this.verificarFechas(partido.Fecha)==2){
      return false;
    }
    else if(partido.Equipo_1 == partido.Equipo_2){
      this.toastr.warning("Los equipos no pueden ser iguales");
      return false;
    }
    else if((this.verificarFechas(partido.Fecha)==0) && (partido.Equipo_1 != partido.Equipo_2))
    this.toastr.success("La fecha es válida y los equipos son diferentes");
    return true;
  }
 
  actualizar_torneos(torneos:torneoModel[]){
    for(let i=0; i<this.torneos.length; i++){
      this.nombre_torneos.push(torneos[i].Nombre)
    }
  }

  ngOnInit(): void { 
    this.partidoService.obtener_torneos().subscribe((data:torneoModel[]) => {
      this.torneos=data
      for(let torn of this.torneos){
        this.nombre_torneos.push(torn.Nombre)
      }
    });

    this.fechaInicioForm = this.formBuilder.group({
      fechaInicioControl: ['', [Validators.required]]
    })
  }

  to_view_events(){
    this.router.navigate(['/view_events']);
  }

  send_partido(partido:gameModel){
    if(this.verificar_partido(partido)==true){
      this.partidoService.agregar_partido(partido).subscribe(data => {
      });
    }
    else{
      this.toastr.warning("Datos incorrectos");
    } 
  }

  save(sede:string, hora:string, min:string, seg:string){
    this.nuevo_partido.Sede = sede;
    let hora_partido:string = hora+":"+min+":"+seg;
    
    this.nuevo_partido.Hora = hora_partido;
    this.setFechaInicio();
    this.send_partido(this.nuevo_partido);
    //this.to_view_events(); 
  }

  to_home(){
    this.router.navigate(['/home']);
  }

  setFecha(event: { value: any; }, fecha:string){ 
    let newDate = new Date(fecha);
    this.nuevo_partido.Fecha = newDate;
  }

  setFechaInicio(){ 
    this.nuevo_partido.Fecha = this.fechaInicioForm.get('fechaInicioControl').value;  
  }

  sethora(event: { value: any; }, hora:string){
    let newDate = new Date(hora);
    this.nuevo_partido.Hora = hora;
  }

  selected_tounament(torneo:string){ 
    this.nuevo_partido.Nombre_Torneo = torneo;
 
    this.partidoService.obtener_equipos_del_torneo(torneo).subscribe((data:torneo_equipo_Model[]) => {
      this.nombre_equipos=[]
      this.equipos=data     
      for(let equipo of this.equipos){
        this.nombre_equipos.push(equipo.Equipo)
      }
    });

    
    this.partidoService.obtener_fases_del_torneo(torneo).subscribe((data:torneo_fase_Model[]) => {
      this.nombre_fases=[]
      this.fases=data     
      for(let fase of this.fases){
        this.nombre_fases.push(fase.Fase)
      }
    });

    for(let torneo_elegido of this.torneos){
      if(torneo_elegido.Nombre==torneo){
        this.torneo_actual = torneo_elegido;
      }
    }
  }

  tounament_phases(fase:string){
    this.nuevo_partido.Fase = fase;
  }

  selected_team1(team1:string){
    this.nuevo_partido.Equipo_1 = team1;
  }

  selected_team2(team2:string){
    this.nuevo_partido.Equipo_2 = team2;
  }

  selected_sede(sede:string){
    this.nuevo_partido.Sede = sede;
  }

  disableSelect = new UntypedFormControl(false);
}


