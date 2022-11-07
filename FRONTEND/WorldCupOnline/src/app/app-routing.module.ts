import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { LlenarQuinielaComponent } from './PAGES/llenar-quiniela/llenar-quiniela.component';
import { LoginComponent } from './PAGES/login/login.component';
import { NewFootballGameComponent } from './PAGES/new-football-game/new-football-game.component';
import { VQuinielaComponent } from './PAGES/v-quiniela/v-quiniela.component';
import { ViewEventsComponent } from './PAGES/view-events/view-events.component';
import { VRankingComponent } from './PAGES/vRanking/v-ranking/v-ranking.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'view_ranking', component: VRankingComponent},
  { path: 'new_football_game', component: NewFootballGameComponent},
  { path: 'view_events', component: ViewEventsComponent},
  { path: 'view_quiniela', component: VQuinielaComponent},
  { path: 'fill_quiniela', component: LlenarQuinielaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
