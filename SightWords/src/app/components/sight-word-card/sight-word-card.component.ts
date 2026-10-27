import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SightWord } from '../../models/sight-word.model';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

export type CardAnimationState = 'idle' | 'exit' | 'enter';

@Component({
  selector: 'app-sight-word-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './sight-word-card.component.html',
  styleUrl: './sight-word-card.component.scss',
})
export class SightWordCardComponent {
  @Input() word: SightWord | null = null;
  @Input() completed = false;
  @Input() size: 'small' | 'large' = 'small';
  @Input() animationState: CardAnimationState = 'idle';
  @Input() exitDirection: 'toss-left' | 'toss-right' | 'toss-up' = 'toss-right';
  @Input() hideWord = false;
  @Output() exitDone = new EventEmitter<void>();

  onAnimationEnd(event: AnimationEvent): void {
    if ((event.target as HTMLElement).classList.contains('flash-card')) {
      if (this.animationState === 'exit') {
        this.exitDone.emit();
      }
    }
  }
}
