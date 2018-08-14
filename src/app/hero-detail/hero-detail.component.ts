// Note that we add the Input decorator
import { Component, OnInit, Input } from '@angular/core';
// We import our Hero blueprint.
import { Hero } from '../Hero';
/* 
  We import the ActivatedRoute & Location in order th extract the id from
  the url route/path we added for the HeroComponent
*/
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

/* 
  We also import the HeroService to return the specific hero that matches
  an id.
*/
import { HeroService } from '../hero-service/hero.service';


@Component({
  selector: 'toh-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  is_selected_hero: Hero;
  /* 
    The @Input() decorator indicates property binding.

    What is happening here is that the hero property here receives the
    hero object from the parent component HeroComponent using the Input()
    decorator.
  */
  // @Input() is_selected_hero: Hero;

  /* 
     We inject ActivatedRoute, Location and HeroService into our constructor
  */
  constructor(
    /* 
      ActivatedRoute hold information about the route to this instance of
      the HeroDetailComponent. i.e /details/11.

      This component needs the parameter extracted from the url (id) in
      order to know which hero to display.
    */
    private route: ActivatedRoute,
    /* 
      HeroService allows us to return the hero matching the id we extract from the url.

      The hero is fetched from a remote server which in this case is our
      HEROES array.
    */
    private heroService: HeroService,
    /* 
      Location is an in-built Angular-Service for the interacting with
      the browser. We will use it to navigate back the the view that lead
      us here.
    */
    private locationService: Location
  ) { }

  ngOnInit() {
    // We call our getHero method which we will define below.
    this.getHero()
  }

  getHero(): void {
    /* 
      route.snapshot - this is a static image of the route info shortly
      after this component was created.

      paramMap- is a dictionary of the route parameter values extracted
      from the URL. The "id" is the key and the actual id say 11 will be
      the value returned. Indicating which hero we are to fetch.
    */
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroByIdService(id)
      .subscribe(hero => this.is_selected_hero = hero)
  }

  // Saving changes to hero.
  save(): void {
    /* 
      We use the updateHeroService method in heroService to update a hero then go back.
    */
    this.heroService.updateHeroService(this.is_selected_hero)
      .subscribe(() => this.goBack())
  }

  // We go back to previous page
  goBack(): void {
    this.locationService.back();
  }

}
