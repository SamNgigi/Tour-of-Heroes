import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importing the FormsModule where the ngModel lives.
import { FormsModule } from '@angular/forms';
// Importing the HttpClient module
import { HttpClientModule } from '@angular/common/http';
// Importing the InMemoryWebApiModule and the InMemoryDataService
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessagesComponent } from '../messages/messages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

// We import the Routing Module
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  // Here in the imports array we add a list of external modules that the app needs.
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    /* 
      The HttpClientInMemoryWebApi module intercepts HTTP requests and
      returns simulated server responses.

      We remove it when a real server is ready to receive requests
    */
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
