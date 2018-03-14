import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DISQUES } from './disques/disques-data';


export class InMemoryDataService {

  createDb() { 
    let disques= DISQUES;
    return { disques };
  }

}
