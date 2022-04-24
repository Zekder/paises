import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/name';
  private apiUrl2: string = 'https://restcountries.com/v3.1/capital';
  private apiUrl3: string = 'https://restcountries.com/v3.1/alpha';


  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/${ termino }`;
    return this.http.get<Country[]>( url )
      // .pipe(
      //   catchError( err=> of(['Hola Mundo']))
      // );

  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl2 }/${ termino }`;
    return this.http.get<Country[]>( url )
      // .pipe(
      //   catchError( err=> of(['Hola Mundo']))
      // );

  }

  getPaisPorCodigo( termino: string ): Observable<Country> {
    const url = `${ this.apiUrl3 }/${ termino }`;
    return this.http.get<Country>( url )
      // .pipe(
      //   catchError( err=> of(['Hola Mundo']))
      // );

  }

}
