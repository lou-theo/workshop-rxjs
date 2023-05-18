import { delay, Observable, of } from 'rxjs';
import { getRandomNumber } from '../common/random';

export function getAttendeesNumber(): Observable<number> {
  return of(getRandomNumber(10, 30));
}

export function getFoodOrdersNumber(): Observable<number> {
  return of(getRandomNumber(15, 25)).pipe(delay(500));
}
