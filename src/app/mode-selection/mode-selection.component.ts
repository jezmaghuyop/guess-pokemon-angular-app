import { Component, OnInit } from '@angular/core';
import { AppStateService } from '@core/services';

@Component({
  selector: 'app-mode-selection',
  templateUrl: './mode-selection.component.html',
  styleUrls: ['./mode-selection.component.scss']
})
export class ModeSelectionComponent implements OnInit {
  trainerHovered: string | null = null;

  constructor(public appStateService: AppStateService) { }

  ngOnInit(): void {
  }

  trainerHover(val: string | null) {
    this.trainerHovered = val;
  }

  startGame(val: number) {
    this.appStateService.question = 0;
    this.appStateService.score = 0;
    this.appStateService.isPlaying = true;

    this.appStateService.pkmnAmount = val || this.appStateService.pkmnTotal;
  }

}
