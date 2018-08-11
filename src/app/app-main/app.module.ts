import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importing the FormsModule where the ngModel lives.
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
