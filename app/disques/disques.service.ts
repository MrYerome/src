import {Injectable } from '@angular/core'; 
import { Disque } from './disque'; // import { DISQUES } from './disques-data';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable'; 
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast'; 
import { catchError, map, tap } from 'rxjs/operators'; 
import { of } from'rxjs/observable/of';


// injecter des donnees

@Injectable()
export class DisquesService {
  private disquesUrl = "api/disques";

  constructor(private http: HttpClient) {}

  // getAllDisques():Disque[] {
  // // type du return :disque
  // return DISQUES;
  // }

  getAllDisques(): Observable < Disque[] > {
    return this.http.get <Disque[]> (this.disquesUrl).pipe(
      catchError(this.handleError('getAllDisques', []))
    );

  }

  private handleError < T > (operation = 'operation', result ? : T) {
    return (error: any): Observable < T > => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }





  // getDisque(id:number) :Disque{
  //   let disques = this.getAllDisques();
  //   for(let i=0; i<disques.length; i++){
  //     if (disques[i].id == id){
  //       return disques[i];
  //     }
  //   }
  // }

  getDisque(id: number): Observable < Disque > {
    const url = `${this.disquesUrl}/${id}`;
    return this.http.get < Disque > (url).pipe(tap(_ => console.log(`fetched hero id=${id}`)), catchError(this.handleError < Disque > (`getDisque id=${id}`)));
  }


  getDisqueCategories(): Array < string > {
    return ['Soul', 'Disco', 'Variete', 'Jazz', 'Classique', 'Funk', 'Autre', 'Etranger', 'Français'];
  }

}
