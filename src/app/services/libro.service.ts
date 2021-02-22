import { Libro } from './../models/libro';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  apiURL = 'https://localhost:44388';
  apiPath = '/api/libros/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private Libro = new Libro();

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Libro[]> {
    return this.httpClient
      .get<Libro[]>(this.apiURL + this.apiPath)
      .pipe(catchError(this.errorHandler));
  }

  get(id): Observable<Libro> {
    return this.httpClient
      .get<Libro>(this.apiURL + this.apiPath + id)
      .pipe(catchError(this.errorHandler));
  }

  create(libro: Libro): Observable<Libro> {
    console.log('servicio Libro: ' + JSON.stringify(libro));

    return this.httpClient
      .post<Libro>(
        this.apiURL + this.apiPath, JSON.stringify(libro), this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  optenerLibroAutor(id): Observable<Libro> {
    return this.httpClient
      .get<Libro>(this.apiURL + this.apiPath + 'GetLibrosPorAutor/' + id)
      .pipe(catchError(this.errorHandler));
  }

  optenerLibroEditorial(id): Observable<Libro> {
    return this.httpClient
      .get<Libro>(this.apiURL + this.apiPath + 'GetLibrosPorEditorial/'+ id)
      .pipe(catchError(this.errorHandler));
  }

  update(id, libro: Libro): Observable<any> {
    return this.httpClient
      .patch<Libro>(
        this.apiURL + this.apiPath + id,
        JSON.stringify(libro),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id) {
    return this.httpClient
      .delete<Libro>(this.apiURL + this.apiPath + id, this.httpOptions)
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
