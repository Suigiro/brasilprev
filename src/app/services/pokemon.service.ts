import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pokemons } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://api.pokemontcg.io/v1/cards';
  
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getPokemons(): Observable<Pokemons[]>{
    return this.httpClient.get<Pokemons[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError)
      )
  }

  getPokemonsByName(pokemon: any): Observable<Pokemons[]>{

    return this.httpClient.get<Pokemons[]>(this.url+'?name='+pokemon.name)
    .pipe(
      retry(2),
      catchError(this.handleError)
      )
  }
  
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
