import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonsListResponse, SimplePokemon } from '../interfaces/simple-pokemon.interface';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private http = inject(HttpClient)
  public loadPage(page: number) : Observable<SimplePokemon[]>{
    if(page !== 0){
      page--;
    }
    page = Math.max(0, page)
    return this.http.get<PokemonsListResponse>(
      `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`
    ).pipe(
      map(resp => {
        const simplePokemons: SimplePokemon[] = resp.results.map(({name, url}) => ({
          id: url.split("/").at(-2) ??  "",
          name,
          url
        }))
        return simplePokemons
      }),
      tap(pokemons => console.log('pokemons', pokemons))
    )
  }
  constructor() { }
}
