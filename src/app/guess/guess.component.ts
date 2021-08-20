import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppStateService } from '@core/services';
import { Subscription } from 'rxjs';
import { Pokemon } from '@shared/models';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit, OnDestroy {

  url: string = 'https://raw.githubusercontent.com/tiffachoo/pokesprites/master/pokemon/';
  imageSrc: string = '';
  subscriptions: Subscription = new Subscription();
  allowedOptions: number = 4;
  pokemons: Pokemon[] = [];
  options: Pokemon[] = [];
  correctAnswer!: Pokemon | null;
  selected!: Pokemon | null;
  isChecked: boolean = false;
  removedPokemonCount: number = 0;

  constructor(public appStateService: AppStateService) { }

  ngOnInit(): void {

    // this.subscriptions.add(
    //   this.appStateService._pkmnAmount$.subscribe((val: number) => {
    //     if (this.appStateService.isPlaying) {
    //       this.pokemons = this.appStateService.pokemonData.slice(0, val + 1);
    //     }
    //   })
    // );

    this.subscriptions.add(
      this.appStateService.isPlaying$.subscribe((val: boolean) => {
        if (val) {
          this.getNextQuestion();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getNextQuestion(): void {
    this.resetAnswer();
    this.appStateService.question += 1;

    if (this.appStateService.question <= this.appStateService.questionAmount) {
      for (let index = 0; index < this.allowedOptions; index++) {

        const randomIndex = Math.floor(Math.random() * ((this.appStateService.pkmnAmount + 1) - this.removedPokemonCount));
        const randomPokemon = this.appStateService.pokemonData[randomIndex];

        this.options.push(randomPokemon);

        // Remove Pokemon from the master list
        this.appStateService.pokemonData.splice(randomIndex, 1);

        // Increase Remove counter
        this.removedPokemonCount += 1;
      }

      this.correctAnswer = this.options[Math.floor(Math.random() * this.allowedOptions)];

      // Generate Image of Pokemon
      const pokemonUrlId = this.correctAnswer.url.match(/\/(\d+)/);

      if (pokemonUrlId !== null) {
        let imageUrl = `${this.url}${this.appStateService.mode === 'classic' ? 'redblue' : 'sunmoon'}/`
        this.imageSrc = `${imageUrl}${pokemonUrlId[1]}.png`;
      }

    }
    else {
      this.resetAnswer();
      this.appStateService.isPlaying = false;
      this.appStateService.isDone = true;
    }
  }

  selectAnswer(option: Pokemon, index: number): void {
    // Only allow to select an option if it hasn't been checked yet
    if (!this.isChecked) {
      this.selected = option;
    }
  }

  trackByIndex(index: number, option: Pokemon): number {
    return index;
  }

  checkAnswer() {
    this.isChecked = true;

    if (this.selected && this.correctAnswer && this.selected.name === this.correctAnswer.name) {
      this.appStateService.score += 10;
    }
  }

  resetAnswer(): void {
    this.options = [];
    this.selected = null;
    this.correctAnswer = null;
    this.isChecked = false;
  }

  // getRandomPokemon(index) {
  //   const diff = (this.question - 1) * 4 + index;
  //   return Math.floor(Math.random() * (this.pkmnAmount + 1 - diff));
  // }
}
