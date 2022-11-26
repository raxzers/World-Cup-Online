import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from './core/guards/role-guard.guard';
import { RoleGuard2Guard } from './core/role-guard2.guard';
import { CommunityComponent } from './PAGES/community/community/community.component';
import { HomeComponent } from './PAGES/home/home.component';
import { LlenarQuinielaComponent } from './PAGES/llenar-quiniela/llenar-quiniela.component';
import { LlenarResultadoComponent } from './PAGES/llenar-resultado/llenar-resultado.component';
import { LoginComponent } from './PAGES/login/login.component';
import { NewFootballGameComponent } from './PAGES/new-football-game/new-football-game.component';
import { RegisterComponent } from './PAGES/register/register/register.component';
import { VQuinielaComponent } from './PAGES/v-quiniela/v-quiniela.component';
import { ViewEventsComponent } from './PAGES/view-events/view-events.component';
import { VRankingComponent } from './PAGES/vRanking/v-ranking/v-ranking.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [RoleGuardGuard] },
  { path: 'view_ranking', component: VRankingComponent/*, canActivate: [RoleGuardGuard]*/ },
  { path: 'new_football_game', component: NewFootballGameComponent, canActivate: [RoleGuardGuard] },
  { path: 'view_events', component: ViewEventsComponent, canActivate: [RoleGuardGuard] },
  { path: 'view_quiniela', component: VQuinielaComponent, canActivate: [RoleGuard2Guard] },
  { path: 'register', component: RegisterComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'fill_quiniela', component: LlenarQuinielaComponent } //canActivate: [RoleGuard2Guard] se quita para hacer pruebas entre usuarios y administradores
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
