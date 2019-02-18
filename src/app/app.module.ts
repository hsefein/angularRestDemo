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
import {MatInputModule} from '@angular/material';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonAddComponent,
    PersonListComponent,
    PersonEditComponent,
    PersonDetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularHalModule.forRoot()
  ],
  providers: [
    {provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService},
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
