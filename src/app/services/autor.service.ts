import { Autor } from './../models/autor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  apiURL = 'https://localhost:44388';
  apiPath = '/api/autor/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private autor = new Autor();

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Autor[]> {
    return this.httpClient
      .get<Autor[]>(this.apiURL + this.apiPath)
      .pipe(catchError(this.errorHandler));
  }

  get(id): Observable<Autor> {
    return this.httpClient
      .get<Autor>(this.apiURL + this.apiPath + id)
      .pipe(catchError(this.errorHandler));
  }

  create(autor: Autor): Observable<Autor> {
    console.log('servicio Autor: ' + JSON.stringify(autor));

    return this.httpClient
      .post<Autor>(
        this.apiURL + this.apiPath, JSON.stringify(autor), this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  // find(id): Observable<any> {
  //   return this.httpClient
  //     .get<Autor>(this.apiURL + this.apiPath + id)
  //     .pipe(catchError(this.errorHandler));
  // }

  update(id, autor: Autor): Observable<any> {
    return this.httpClient
      .patch<Autor>(
        this.apiURL + this.apiPath + id,
        JSON.stringify(autor),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id) {
    return this.httpClient
      .delete<Autor>(this.apiURL + this.apiPath + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
