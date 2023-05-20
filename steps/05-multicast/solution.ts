import { ReplaySubject, share } from 'rxjs';
import { getAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything } from './api';

export const result$ = getAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything(true).pipe(
  share({
    connector: () => new ReplaySubject<number>(1),
    resetOnComplete: false,
  }),
);

result$.subscribe({
  next: (value) => console.log(`First subscriber: ${value}`),
  error: (error) => console.log(`First subscriber: ${error}`),
});
result$.subscribe({
  next: (value) => console.log(`Second subscriber: ${value}`),
  error: (error) => console.log(`Second subscriber: ${error}`),
});
