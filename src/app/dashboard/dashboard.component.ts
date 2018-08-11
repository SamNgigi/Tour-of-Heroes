import { Component, OnInit } from '@angular/core';
// Importing our blueprint
import { Hero } from '../Hero';
// Importing our HeroService
import { HeroService } from '../hero-service/hero.service';

@Component({
  selector: 'toh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Initializing our heroes property
  heroes: Hero[];

  // When on clicks on a hero
  selected_hero: Hero

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroesService()
      // Returns the first five heroes.
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }

  onSelect(hero: Hero): void {
    this.selected_hero = hero;
  }

}
