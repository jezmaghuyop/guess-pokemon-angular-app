import { Injectable } from '@angular/core';
import { Pokemon } from '@shared/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private readonly _question = new BehaviorSubject<number>(0);
  private readonly _score = new BehaviorSubject<number>(0);
  private readonly _isPlaying = new BehaviorSubject<boolean>(false);
  private readonly _isDone = new BehaviorSubject<boolean>(false);
  private readonly _pkmnAmount = new BehaviorSubject<number>(0);
  private readonly _pokemonData = new BehaviorSubject<Pokemon[]>([]);

  readonly question$ = this._question.asObservable();
  readonly score$ = this._score.asObservable();
  readonly isPlaying$ = this._isPlaying.asObservable();
  readonly isDone$ = this._isDone.asObservable();
  readonly _pkmnAmount$ = this._pkmnAmount.asObservable();
  readonly _pokemonData$ = this._pokemonData.asObservable();

  pkmnTotal: number = 802;
  mode: string = 'classic';

  get questionAmount(): number {
    return 2;
  }

  get question(): number {
    return this._question.getValue();
  }

  set question(val: number) {
    this._question.next(val);
  }

  get score(): number {
    return this._score.getValue();
  }

  set score(val: number) {
    this._score.next(val);
  }

  get isPlaying(): boolean {
    return this._isPlaying.getValue();
  }

  set isPlaying(val: boolean) {
    this._isPlaying.next(val);
  }

  get isDone(): boolean {
    return this._isDone.getValue();
  }

  set isDone(val: boolean) {
    this._isDone.next(val);
  }

  get pkmnAmount(): number {
    return this._pkmnAmount.getValue();
  }

  set pkmnAmount(val: number) {
    this._pkmnAmount.next(val);
  }

  get pokemonData(): Pokemon[] {
    return this._pokemonData.getValue();
  }

  set pokemonData(val: Pokemon[]) {
    this._pokemonData.next(val);
  }

  constructor() { }
}
