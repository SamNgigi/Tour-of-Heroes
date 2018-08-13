import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Ciise Masiix' },
      { id: 12, name: 'Julia Ngigi' },
      { id: 13, name: 'Nelson Mandela' },
      { id: 14, name: 'Desmond Doss' },
      { id: 15, name: 'Luther King' },
      { id: 16, name: 'Tony Stark' },
      { id: 17, name: 'Steve Rodgers' },
      { id: 18, name: 'T Challa' },
      { id: 19, name: 'Bruce Wayne' },
      { id: 20, name: 'Clark Kent' }
    ]
    return { heroes };
  }
}