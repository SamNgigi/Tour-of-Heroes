import { Injectable } from '@angular/core';
// We import our Hero blueprint
import { Hero } from '../Hero';
// We import the HEROES array of Hero object instances.
import { HEROES } from '../heroes-array';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }

  // We add a getHeroes function
  getHeroes(): Hero[] {
    return HEROES;
  }
}
