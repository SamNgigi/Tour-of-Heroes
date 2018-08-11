import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; // We can remove this.
// We import the modules from angular router responsible for routing.
import { RouterModule, Routes } from '@angular/router';

// We import the routes we will be navigating to.
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


// We add the components to a routes array and define the path..
const routes: Routes = [
  /* 
    To navigate to the heroes-component the path will be,
    http://localhost:4200/heroes
  */
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  /* 
    This route redirects a URL that fully matches the empty path to the
    route whose path is '/dashboard'.
  */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]


@NgModule({
  imports: [
    // CommonModule
    /* 
      Below we initialize the RouterModule and start listening for browser
      location changes.

      We also call the forRoot method and pass in our routes array.

      The method is called forRoot because the router is configured at the application's root level.

      The forRoot() method supplies the service providers and directives
      need for routing and perform the initial navigation base on current
      browser URL.
    */
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
