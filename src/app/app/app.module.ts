import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ExternalConfigurationService} from './external-configuration-service';
import {AngularHalModule} from 'angular4-hal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PersonService} from './service/person-service';
import {Router, RouterModule} from '@angular/router';
import {
  MatBadgeModule,
  MatButtonModule, MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule,
  MatOptionModule, MatRadioModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PersontaskAddComponent } from './persontask-add/persontask-add.component';
import { PersontaskEditComponent } from './persontask-edit/persontask-edit.component';
import { PersontaskDetailComponent } from './persontask-detail/persontask-detail.component';
import { PersontaskListComponent } from './persontask-list/persontask-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonAddComponent,
    PersonListComponent,
    PersonEditComponent,
    PersonDetailComponent,
    HomeComponent,
    TaskAddComponent,
    TaskEditComponent,
    TaskDetailComponent,
    TaskListComponent,
    PersontaskAddComponent,
    PersontaskEditComponent,
    PersontaskDetailComponent,
    PersontaskListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatDialogModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    AngularHalModule.forRoot()
  ],
  exports: [
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    {provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService},
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
