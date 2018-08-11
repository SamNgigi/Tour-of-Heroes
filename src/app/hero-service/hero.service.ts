import { Injectable } from '@angular/core';
// We import our Hero blueprint
import { Hero } from '../Hero';
// We import the HEROES array of Hero object instances.
import { HEROES } from '../heroes-array';
// We import Observable and of symbols from the Angular RxJs library
import { Observable, of } from 'rxjs';
// We import our MessageService
import { MessageService } from '../message-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /* 
    Below is what we call a service-in-service scenario: We inject the
    MessageService into the HeroService which is injected into the HeroesComponent

    Here we specify that this particular message service injected to the
    hero service will be private because it is bound to the
    getHeroesService method.
  */
  constructor(private messageService: MessageService) { }

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
    */
    this.messageService.addMessage('HeroService: Fetched heroes');
    return of(HEROES);
  }
}
