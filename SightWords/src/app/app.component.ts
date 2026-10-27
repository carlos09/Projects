// app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SightWordCardComponent } from './components/sight-word-card/sight-word-card.component';
import { ModeToggleComponent } from './components/mode-toggle/mode-toggle.component';
import { ListenModeComponent } from './components/listen-mode/listen-mode.component';
import { SpeakModeComponent } from './components/speak-mode/speak-mode.component';
import { GameStateService, GameMode } from './services/game-state.service';
import { ScoreCounterComponent } from './components/score-counter/score-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    SightWordCardComponent,
    ModeToggleComponent,
    ListenModeComponent,
    SpeakModeComponent,
    ScoreCounterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public gameState: GameStateService) {}

  ngOnInit(): void {
    this.gameState.load();
  }

  setMode(mode: GameMode): void {
    this.gameState.gameMode = mode;
  }
}
