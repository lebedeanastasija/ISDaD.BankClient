import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import {ClientsService} from './services/client.service';
import {BankHttpClient} from './utils/http';

const appRoutes: Routes = [
  { path: 'AddClient', component: AddClientComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ClientsService, BankHttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
