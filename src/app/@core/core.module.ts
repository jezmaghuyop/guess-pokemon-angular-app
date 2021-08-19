import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppStateService } from '@core/services';
import { PokemonService } from '@core/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AppStateService,
    PokemonService
  ]
})
export class CoreModule { }
