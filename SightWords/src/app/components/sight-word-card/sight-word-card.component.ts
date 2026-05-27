import { Component } from '@angular/core';
import { SightWord } from '../../models/sight-word.model';
import { SightWordService } from '../../services/sight-words.service';

@Component({
  selector: 'app-sight-word-card',
  standalone: true,
  imports: [],
  templateUrl: './sight-word-card.component.html',
  styleUrl: './sight-word-card.component.scss',
})
export class SightWordCardComponent {
  words: SightWord[] = [];
  currentIndex = 0;

  constructor(private sightWordService: SightWordService) {}

  ngOnInit(): void {
    this.loadWords();
  }

  loadWords(): void {
    this.sightWordService.getSightWords().subscribe((words) => {
      this.words = words;
    });
  }

  nextCard(): void {
    if (this.currentIndex < this.words.length - 1) {
      this.currentIndex++;
    }
  }

  previousCard(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  get currentWord(): SightWord | null {
    return this.words[this.currentIndex] || null;
  }
}
