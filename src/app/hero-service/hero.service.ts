import { Injectable } from '@angular/core';
// We import our Hero blueprint
import { Hero } from '../Hero';
/* 
import { HEROES } from '../heroes-array';

  We replace HEROES with our in-memory-data-service which we use to
  simulate a server. Note that we don't have to import our
  in-memory-data-service.

  We however import HttpClient and HttpHeaders in-order to communicate with the server.
*/
import { HttpClient, HttpHeaders } from '@angular/common/http';

// We import Observable and of symbols from the Angular RxJs library
import { Observable, of } from 'rxjs';
// We import our MessageService
import { MessageService } from '../message-service/message.service';
/* 
  We import the following symbols
  1. catchError for catching errors,
  2. map for extracting data from nested json and 
  3. tap that looks at the observable values does something with them the passes them along.

  The tap call back doesn't touch  the values themselves
*/
import { catchError, map, tap } from 'rxjs/operators';

/* 
  We add httpOptions to specify additional  header info about our
  Observable object
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes_url = 'api/heroes'; // URL to web api.

  /* 
    Below is what we call a service-in-service scenario: We inject the
    MessageService into the HeroService which is injected into the HeroesComponent

    Here we specify that this particular message service injected to the
    hero service will be private because it is bound to the
    getHeroesService method.
  */
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  /*
   We add a getHeroes function
 
   getHeroes(): Hero[] {
     return HEROES;
   }
 
   We update the above method to use Observables.
 
   Now an Observable is a representation of any set of values over any amount of time.

   So here our function will wait for our Observable to emit data. That
   could be now or in a few or longer.

   The Observable allows us to do other things while it anticipates to be occupied with data from our call.

   Once the data is received we call the subscribe method that sets the return to our own property.
   
 */

  getHeroesService(): Observable<Hero[]> {
    /* 
      "of(Heroes)" returns and Observable<Hero[]> that emits a single
      value which in this case is array of HEROES.

      We update our method that will send message after fetching notes.

      this.messageService.addMessage('HeroService: Fetched heroes');
      return of(HEROES);

      We convert the above into below to make use of HttpClient

      We have swapped the of() method for the http.get<Hero[]>() method which where both return an Observable.
    */
    return this.http.get<Hero[]>(this.heroes_url)
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroesService', []))
      );

    /* 
      All HttpClient methods return an RxJS Observable of something.

      Https is a request/response protocol where by when you make a request it returns a single response.

      In general and observable can return multiple values over time.

      An observable from HttpClient always emits a single value and then
      completes, never to emit again. In this case the http.get () is returning a observable hero arrays.
    */
  }

  // Returns a single hero observable based on id.
  getHeroByIdService(id: number): Observable<Hero> {
    const hero_id_url = `${this.heroes_url}/${id}`;
    return this.http.get<Hero>(hero_id_url)
      .pipe(
        tap(hero => this.log(`fetched hero id= ${id}`)),
        catchError(this.handleError<Hero>(`getHeroByIdService id=${id}`))
      )
  }

  // The addHeroService to post a new hero to the server
  addHeroService(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroes_url, hero, httpOptions)
      .pipe(
        tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
        catchError(this.handleError<Hero>('addHeroService'))
      );
  }


  // We add the updateHeroService
  updateHeroService(hero: Hero): Observable<any> {
    return this.http.put(this.heroes_url, hero, httpOptions)
      .pipe(
        /* 
          It seems here i have to use the underscore _. If i use hero
          there i get hero does not have property hid
        */
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHeroService'))
      )
  }

  /* 
    We create a method to deal with the https operation that failed.

    @param operation - operation that failed
    @param result - optional value to return as the observable result.
  */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // We log the error
      console.error(error);
      // Message to be displayed by the messageService in the heroService.
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning empty result.
      return of(result as T);
    }
  }

  /* 
    A function that will log a HeroService message with the
    MessageService.
  */
  private log(message: string) {
    this.messageService.addMessage(`HeroService: ${message}`);
  }

}
