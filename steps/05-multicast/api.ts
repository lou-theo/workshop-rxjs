import { Observable } from 'rxjs';

let hasEmittedError = false;

export function getAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything(withError: boolean = false): Observable<number> {
  return new Observable((subscriber) => {
    console.log('# Doing very resource intensive computation');
    if (withError && !hasEmittedError) {
      hasEmittedError = true;
      subscriber.error('Error, please try again later - in approximately 10 million years');
    }
    subscriber.next(42);
    subscriber.complete();
  });
}
