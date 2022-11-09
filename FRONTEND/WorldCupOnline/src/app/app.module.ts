import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './PAGES/login/login.component';
import { HomeComponent } from './PAGES/home/home.component';
import { NewFootballGameComponent } from './PAGES/new-football-game/new-football-game.component';
import { ViewEventsComponent } from './PAGES/view-events/view-events.component';
import { NavbarComponent } from './PAGES/navbar/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatTableModule} from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';
import { VRankingComponent } from './PAGES/vRanking/v-ranking/v-ranking.component';
import { VQuinielaComponent } from './PAGES/v-quiniela/v-quiniela.component';
import { LlenarQuinielaComponent } from './PAGES/llenar-quiniela/llenar-quiniela.component';
import { RegisterComponent } from './PAGES/register/register/register.component';
import { ClientNavbarComponent } from './PAGES/clientNavbar/client-navbar/client-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewFootballGameComponent,
    ViewEventsComponent,
    NavbarComponent,
    VRankingComponent,
    VQuinielaComponent,
    LlenarQuinielaComponent,
    RegisterComponent,
    ClientNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatNativeDateModule,
    MatTabsModule,
    MatGridListModule,NgbModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
