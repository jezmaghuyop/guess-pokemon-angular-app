import { Component, OnInit } from '@angular/core';
import { AppStateService } from '@core/services';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {

  constructor(public appStateService: AppStateService) { }

  ngOnInit(): void {
  }

}
