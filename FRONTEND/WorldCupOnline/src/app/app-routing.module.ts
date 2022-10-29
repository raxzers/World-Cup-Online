import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { NewFootballGameComponent } from './PAGES/new-football-game/new-football-game.component';
import { ViewEventsComponent } from './PAGES/view-events/view-events.component';
import { VRankingComponent } from './PAGES/vRanking/v-ranking/v-ranking.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'view_ranking', component: VRankingComponent},
  { path: 'new_football_game', component: NewFootballGameComponent},
  { path: 'view_events', component: ViewEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
