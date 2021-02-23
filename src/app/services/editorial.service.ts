import { catchError } from 'rxjs/operators';
import { Editorial } from './../models/editorial';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  apiURL = 'https://localhost:44388';
  apiPath = '/api/editorial/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private editor = new Editorial();

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Editorial[]> {
    return this.httpClient
      .get<Editorial[]>(this.apiURL + this.apiPath)
      .pipe(catchError(this.errorHandler));
  }

  get(id: number): Observable<Editorial> {
    return this.httpClient
      .get<Editorial>(this.apiURL + this.apiPath + id)
      .pipe(catchError(this.errorHandler));
  }

  create(editor: Editorial): Observable<Editorial> {
    console.log('servicio Editorial: ' + JSON.stringify(editor));
    return this.httpClient
      .post<Editorial>(
        this.apiURL + this.apiPath, JSON.stringify(editor), this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  // find(id): Observable<any> {
  //   return this.httpClient
  //     .get<Editor>(this.apiURL + this.apiPath + id)
  //     .pipe(catchError(this.errorHandler));
  // }

  update(id, editor: Editorial): Observable<Editorial> {
    return this.httpClient
      .patch<Editorial>(
        this.apiURL + this.apiPath + id,
        JSON.stringify(editor),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id) {
    return this.httpClient
      .delete<Editorial>(this.apiURL + this.apiPath + id, this.httpOptions)
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
