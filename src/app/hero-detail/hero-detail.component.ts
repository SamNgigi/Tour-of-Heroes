// Note that we add the Input decorator
import { Component, OnInit, Input } from '@angular/core';
// We import our Hero blueprint.
import { Hero } from '../Hero';


@Component({
  selector: 'toh-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  /* 
    The @Input() decorator indicates property binding.

    What is happening here is that the hero property here receives the
    hero object from the parent component HeroComponent using the Input()
    decorator.
  */
  @Input() is_selected_hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
