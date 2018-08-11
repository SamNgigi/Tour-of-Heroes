import { Component, OnInit } from '@angular/core';
// We import our Hero Class 
import { Hero } from "../Hero";
/* 
  We edit this out because we have a hero service dealing with this.
  
  // We import our HEROES object array.
  import { HEROES } from "../heroes-array";
 */
// We import our hero-service
import { HeroService } from '../hero-service/hero.service';

/* 

  The @Component is a decorator function that specifies the Angular
  metadata for a component.
*/
@Component({
  // This is the CSS element's selector
  selector: 'toh-heroes',
  // Specifies the location of this components template file
  templateUrl: './heroes.component.html',
  // Specifies the location of this components private CSS styles
  styleUrls: ['./heroes.component.scss']
})
/* 
  We always export a components class so that we can import it
  elsewhere.
*/
export class HeroesComponent implements OnInit {

  // We add a hero property.

  // hero = 'Ciise Masiix'; 

  // Defining the var to hold the array it using our class

  heroes: Hero[];

  selected_hero: Hero;

  /* 
    It seems like i should call my constructor below property declaration.
  */
  constructor(private heroService: HeroService) {
    // Calling functions in the constructor is not  best practice.

    /* 
      We reserve the constructor for simple initialization such as
      writing constructor parameters and properties.

      The constructor should not do anything. It certainly should not
      make HTTP requests to a remote server as a real data service would.
    */
  }

  /* 
   This function takes in the hero form the *ngFor repeater directive
   that is selected. Passes it in-place of our hero parameter which is
   of type Hero. Finally we assign its value to selected_hero.
 */
  onSelect(hero: Hero): void {
    this.selected_hero = hero;
  }

  getHeroes(): void {
    /* 
      The method below used to return an array --> Hero []

      this.heroes = this.heroService.getHeroesService();

      Now we adjust it to because it is returning an Observable. The
      subscribe method is the critical difference.

      So what is happening here.

      Remember that an Observable is a representation of any set data
      over any amount of time.

      Observables allow us to work asynchronously. The subscribe method
      will receive data emitted from an Observable to a callback function
      that sets this component's heroes property to our Observable Heroes
      array.
    */
    this.heroService.getHeroesService()
      .subscribe(heroes => this.heroes = heroes);

  }
  /* 
    Below is an Angular life-cycle hook called immediately after a
    component is created.

    It is a good place to put initialization logic.
  */
  ngOnInit() {
    this.getHeroes()
  }

}
