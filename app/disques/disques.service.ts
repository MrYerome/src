import {Injectable } from '@angular/core'; 
import { Disque } from './disque'; // import { DISQUES } from './disques-data';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable'; 
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast'; 
import { catchError, map, tap } from 'rxjs/operators'; 
import { of } from'rxjs/observable/of';
import { HttpHeaders } from '@angular/common/http';


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

  updateDisque(d: Disque): Observable<Disque> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };

      return this.http.put(this.disquesUrl, d, httpOptions).pipe(
        tap(_ => console.log(`updated disque id=${d.id}`)),
        catchError(this.handleError<any>('updateDisque'))
      );
  }

  deleteDisque(d: Disque): Observable<Disque> {
    const url = `${this.disquesUrl}/${d.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    console.log("disque supprimé");

    return this.http.delete(url, httpOptions).pipe(
      tap(_ => console.log(`deleted disque id=${d.id}`)),
      catchError(this.handleError<any>('deleteDisque'))
    );
  }
  


  getDisque(id: number): Observable < Disque > {
    const url = `${this.disquesUrl}/${id}`;
    return this.http.get < Disque > (url).pipe(tap(_ => console.log(`fetched hero id=${id}`)), catchError(this.handleError < Disque > (`getDisque id=${id}`)));
  }


  getDisqueCategories(): Array < string > {
    return ['Soul', 'Disco', 'Variete', 'Jazz', 'Classique', 'Funk', 'Autre', 'Etranger', 'Français'];
  }

  searchDisques(term:string):Observable<Disque[]> {
    if (!term.trim()) {
      return of([])
    }
    else {
      const url = `api/disques/?name=${term}`;
      return this.http.get<Disque[]>(url).pipe(
        tap(_ => console.log(`recherche associée à ${term}`)),
        catchError(this.handleError<any>('searchDisques', []))
    )}
  }

}
