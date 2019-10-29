import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LeaguesComponent } from './leagues/leagues.component';
import { StagesComponent } from './stages/stages.component';
import { RacesComponent } from './races/races.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UserAddComponent } from './user-add/user-add.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersFormComponent,
    HomeComponent,
    LeaguesComponent,
    StagesComponent,
    RacesComponent,
    UsersProfileComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
