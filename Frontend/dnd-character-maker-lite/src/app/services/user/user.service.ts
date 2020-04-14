import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { DnDUser } from '../../model/DnDUser';
import { DnDCharacter } from '../../model/DnDCharacter';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl:string = 'http://localhost:8080/user';

  private currentUser:DnDUser;
  public getCurrentUser():DnDUser {
    return this.currentUser;
  }
  public setCurrentUser(user:DnDUser) {
    this.currentUser = user;
  }

  httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http: HttpClient) { }


  /** Post new user on the database */
  public addNewUser(newUser: DnDUser):Observable<DnDUser> {
    const url = `${this.usersUrl}/newUser`;

    return this.http.post<DnDUser>(url, newUser, this.httpOptions);

  }

  /** Get users from the server */
  public getUserByLogin(loginUser: DnDUser): Observable<DnDUser> {

    const url = `${this.usersUrl}/uname=${loginUser.username}&upass=${loginUser.password}`;
    console.log(url);
    return this.http.get<DnDUser>(url, this.httpOptions).pipe(
      tap((foundUser:DnDUser) => console.log(`fetched ` + JSON.stringify(foundUser))),
      catchError(this.handleError<DnDUser>(`getUser username=${loginUser.getUsername} failed`))
    );
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
