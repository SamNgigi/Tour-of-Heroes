import { Component, OnInit } from '@angular/core';
// We import our Hero Class 
import { Hero } from "../Hero";
// We import our HEROES object array.
import { HEROES } from "../heroes-array";

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

  // Defining it using our class

  heroes = HEROES;

  selected_hero: Hero;

  /* 
    This function takes in the hero form the *ngFor repeater directive
    that is selected. Passes it in-place of our hero parameter which is
    of type Hero. Finally we assign its value to selected_hero.
  */
  onSelect(hero: Hero): void {
    this.selected_hero = hero;
  }

  constructor() { }
  /* 
    Below is an Angular life-cycle hook called immediately after a
    component is created.

    It is a good place to put initialization logic.
  */
  ngOnInit() {
  }

}
