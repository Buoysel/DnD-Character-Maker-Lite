import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { DnDCharacter } from 'src/app/model/DnDCharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private charUrl:string = 'http://localhost:8080/character'

  httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'}),
    observe: 'response'
  }
    
  constructor(private http: HttpClient) { 

  }

  /** Post new character on the database */
  public addNewCharacter(newCharacter): Observable<HttpResponse<DnDCharacter>> {
    const url = `${this.charUrl}/new`;

    console.log("Hitting URL: " + url);
    console.log("Sending data: ");
    console.log(newCharacter);

    return this.http.post<DnDCharacter>(url, newCharacter, {
      headers: new HttpHeaders({'content-type': 'application/json'}),
      observe: 'response'
    });
  }

  /** Get Character by ID */
  public getCharacterById(charID: number): Observable<HttpResponse<DnDCharacter>> {
    const url = `${this.charUrl}/${charID}`;
    return  this.http.get<DnDCharacter>(url, {observe: 'response'});
  }

  /** Get all of a user's characters */
  public getAllCharacters(userID: number): Observable<HttpResponse<DnDCharacter[]>> {
    const url = `${this.charUrl}/all/${userID}`;
    console.log("Retrieving from url: " + url);
    return this.http.get<DnDCharacter[]>(url, {observe: 'response'})
      .pipe(
        tap(resp => console.log)
      );
  }

  /** Update Character data */
  public updateCharacter(character: DnDCharacter): Observable<HttpResponse<DnDCharacter>> {
    const url = `${this.charUrl}/update/${character.charID}`;
    console.log("Sending to url: " + url);
    return this.http.put<DnDCharacter>(url, character, {
      headers: new HttpHeaders({'content-type': 'application/json'}),
      observe: 'response'
    });
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: Send the error to remote logging infrastructure
      console.error(error); //log to console instead

      // TODO: better job transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}



