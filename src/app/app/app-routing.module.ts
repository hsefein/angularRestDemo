import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {PersonListComponent} from './person-list/person-list.component';
import {PersonAddComponent} from './person-add/person-add.component';
import {PersonEditComponent} from './person-edit/person-edit.component';
import {HomeComponent} from './home/home.component';
import {TaskAddComponent} from './task-add/task-add.component';
import {TaskEditComponent} from './task-edit/task-edit.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {PersontaskAddComponent} from './persontask-add/persontask-add.component';
import {PersontaskListComponent} from './persontask-list/persontask-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'prefix'},
  {path: 'home', component: HomeComponent},
  { path: 'person-list', component: PersonListComponent},
  { path: 'person-add', component: PersonAddComponent},
  { path: 'person-detail/:id', component: PersonDetailComponent},
  //   children: [
  //     {path: 'task-add', component: TaskAddComponent},
  //     {path: 'task-edit/:id', component: TaskEditComponent},
  //     {path: 'task-list', component: TaskListComponent},
  //     {path: 'task-detail/:id', component: TaskDetailComponent},
  //     {path: 'persontask-add', component: PersontaskAddComponent},
  //     ]
  // },
  {path: 'task-add', component: TaskAddComponent},
  {path: 'task-edit/:id', component: TaskEditComponent},
  {path: 'task-list', component: TaskListComponent},
  {path: 'task-detail/:id', component: TaskDetailComponent},
  {path: 'persontask-add/:id', component: PersontaskAddComponent},
  {path: 'persontask-list', component: PersontaskListComponent},
  { path: 'person-edit/:id', component: PersonEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
