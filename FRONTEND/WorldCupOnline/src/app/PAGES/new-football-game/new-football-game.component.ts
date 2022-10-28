import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Time } from '@angular/common';
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

  equipos:torneo_equipo_Model[];
  nombre_equipos:string[] = [];

  fases:torneo_fase_Model[];
  nombre_fases:string[] = [];


  nuevo_partido:gameModel={ Fecha: null, Hora: null, Nombre_Torneo: '', Fase: '', Equipo_1: '', Equipo_2: '', Sede: '', Estado_del_partido: 'pendiente' };

  //new Date('2023-10-06 02:20:00')

  constructor(private router:Router, public partidoService:GameService, private formBuilder: FormBuilder) { }

  verificarFechas(){
    if (this.fechaInicioForm.get('fechaInicioControl').value == "") {
      this.fechaInicioCondicion = true;
    } else {
      this.fechaInicioCondicion = false;
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
    this.partidoService.agregar_partido(partido).subscribe(data => {
    });
  }

  save(sede:string, hora:string, min:string, seg:string){
    this.nuevo_partido.Sede = sede;
    let hora_partido:string = hora+":"+min+":"+seg;
    
    this.nuevo_partido.Hora = hora_partido;
    //this.verificarFechaActual();
    this.setFechaInicio();
    //console.log(this.nuevo_partido);
    this.send_partido(this.nuevo_partido);
    //sleep(3000);
    //this.to_view_events();
    
  }

  to_home(){
    this.router.navigate(['/home']);
  }

  setFecha(event: { value: any; }, fecha:string){ 
    let newDate = new Date(fecha);
    //console.log(newDate);
    this.nuevo_partido.Fecha = newDate;
  }

  setFechaInicio(){ 
    //let newDate = new Date(fecha);
    //console.log(newDate);
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
function sleep(arg0: number) {
  throw new Error('Function not implemented.');
}

