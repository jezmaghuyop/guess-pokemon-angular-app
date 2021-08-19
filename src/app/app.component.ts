import { Component, OnInit } from '@angular/core';

import { Pokemon } from '@shared/models';

import { AppStateService } from '@core/services';
import { PokemonService } from '@core/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  classic: boolean = true;

  constructor(
    private _pokemonService: PokemonService,
    private _appStateService: AppStateService) {
  }

  ngOnInit(): void {
    let pokeList = localStorage.getItem('pokeList');

    if (pokeList) {
      this._appStateService.pokemonData = JSON.parse(pokeList);
    } else {
      this._pokemonService.getData()
        .subscribe((results: Pokemon[]) => {

          localStorage.setItem('pokeList', JSON.stringify(results));

          this._appStateService.pokemonData = results;

        });
    }
  }

}
