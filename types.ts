
export interface TrickyWord {
  word: string;
  guide: string;
}

export interface PronunciationFeedback {
  score: number;
  accuracy: 'try-again' | 'getting-there' | 'great' | 'superstar';
  mispronouncedSounds: string[];
  tips: string[];
  detectedText: string;
}

export interface StorySegment {
  id: string;
  text: string;
  illustration: string;
  context: string;
  trickyWords?: TrickyWord[];
}

export interface Story {
  id: string;
  title: string;
  description: string;
  coverEmoji: string;
  segments: StorySegment[];
}

export interface PracticeHistory {
  wordId: string;
  text: string;
  score: number;
  timestamp: number;
  storyId?: string;
}
