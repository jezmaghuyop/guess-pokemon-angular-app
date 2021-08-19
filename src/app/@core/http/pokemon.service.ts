import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '@shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pkmnTotal: number = 802;
  url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private _httpClient: HttpClient) { }

  getData(): Observable<Pokemon[]> {
    return this._httpClient.get(`${this.url}?limit=${this.pkmnTotal}`)
      .pipe(
        map((data: any) => data.results)
      );
  }
}


