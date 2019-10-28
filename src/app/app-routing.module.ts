import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { StagesComponent } from './stages/stages.component';
import { RacesComponent } from './races/races.component';
import { HomeComponent } from './home/home.component';
import { UsersFormComponent } from './users-form/users-form.component';

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/users -> UsersComponent
// http://localhost:4200/leagues -> LeaguesComponent
// http://localhost:4200/stages -> StagesComponent
// http://localhost:4200/races -> RacesComponent

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'leagues', component: LeaguesComponent },
    { path: 'stages', component: StagesComponent },
    { path: 'races', component: RacesComponent },
    { path: 'users/:id', component: UsersFormComponent},
    { path: 'users/add', component: UsersFormComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

