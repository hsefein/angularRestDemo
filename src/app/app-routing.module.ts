import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {PersonListComponent} from './person-list/person-list.component';
import {PersonAddComponent} from './person-add/person-add.component';
import {PersonEditComponent} from './person-edit/person-edit.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'prefix'},
  {path: 'home', component: HomeComponent},
  { path: 'person-list', component: PersonListComponent},
  { path: 'person-add', component: PersonAddComponent},
  { path: 'person-detail/:id', component: PersonDetailComponent},
  { path: 'person-edit/:id', component: PersonEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
