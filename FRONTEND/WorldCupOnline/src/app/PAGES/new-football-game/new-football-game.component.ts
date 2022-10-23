import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-football-game',
  templateUrl: './new-football-game.component.html',
  styleUrls: ['./new-football-game.component.scss']
})
export class NewFootballGameComponent implements OnInit {

  //torneos:string[]=["torneo1","torneo2","torneo3","torneo4","torneo5","torneo6","torneo7","torneo8"];

  constructor(private router:Router) { }

  ngOnInit(): void { }

  to_view_events(){
    this.router.navigate(['/view_events']);
  }

  disableSelect = new UntypedFormControl(false);

}
