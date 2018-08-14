import { Component, OnInit } from '@angular/core';
/* 
  We import the Observable and Subject icons from rxjs.
*/
import { Observable, Subject } from 'rxjs';
/* 

*/
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
// Importing our blueprint.
import { Hero } from '../Hero';
// Importing our service
import { HeroService } from '../hero-service/hero.service';

@Component({
  selector: 'toh-search-heroes',
  templateUrl: './search-heroes.component.html',
  styleUrls: ['./search-heroes.component.scss']
})
export class SearchHeroesComponent implements OnInit {

  // Declaring our vars
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  /* 
    searchTerms property is declared as an RxJs Subject.

    A Subject is both a source of observable values and an
    Observable itself. You can subscribe to an Subject as you would
    any Observable.
  */
  constructor(private heroService: HeroService) { }

  /* 
    Our searchHeroes method is called via an event binding to the input keystroke event
    Push a search query/term into the observable stream
  */
  searchHeroes(query: string): void {
    /* 
      Every time a suer types in the text-box, the binding calls the searchHeroes with the text-box value - searchTerm.

      The searchTerms becomes an Observable emitting a steady stream
      of search terms.
    */
    this.searchTerms.next(query);
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms
      .pipe(
        /* 
          Waiting 300ms after each keystroke before considering the term
        */
        debounceTime(300),

        /* 
          Ignore new term if the same as the previous
        */
        distinctUntilChanged(),

        /* 
          Switch to new search observable each time the query changes

          So the switchMap operator calls the search service for
          each search term that makes it through debounce and
          distinctUntilChanged. It cancels and discards previous
          search observables, returning only the latest search
          service observable.

          It preserves the original request order while returning
          only the observable from the most recent HTTP method call.

          Previous or unwanted results are simply discarded before
          the reach the app.
        */
        switchMap((query: string) => this.heroService.searchHeroesService(query))

      );
  }

}
