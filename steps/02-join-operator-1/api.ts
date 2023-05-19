import { delay, Observable, of } from 'rxjs';

export function getAttendeesNumber(): Observable<number> {
  return of(25);
}

export function getFoodOrdersNumber(): Observable<number> {
  return of(22).pipe(delay(500));
}
