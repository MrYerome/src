import { Injectable } from '@angular/core';
import { DISQUES } from './disques-data';
import { Disque } from './Disque';

@Injectable()
export class DisquesService {

  constructor() { }

  getAllDisques(): Disque[] {
    return DISQUES;
  }

  getDisque(id: number) {
    
    let disques = this.getAllDisques();
    for (let i = 0; i < disques.length; i++) {
      if (disques[i].id == id) {
         return disques[i];
      }
    }
  }
}
