export type WordCategory = 'core' | 'bonus-kindergarten' | 'bonus-first-grade';

export interface SightWord {
  id: number;
  word: string;
  grade: string;
  trimester: number;
  category: WordCategory;
  order: number;
}
