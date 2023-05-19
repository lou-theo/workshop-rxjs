import { Observable } from 'rxjs';
import { Order } from './models';

let hasEmittedError = false;

export function getOrders(increaseDifficulty: boolean = false): Observable<Order[]> {
  return new Observable((subscriber) => {
    subscriber.next([{ isValid: true, numberOfItems: 1 }, { isValid: false, numberOfItems: -10 }, { isValid: true, numberOfItems: 3 }]);
    if (increaseDifficulty && !hasEmittedError) {
      hasEmittedError = true;
      subscriber.error('Network error, please try again later');
    }
    subscriber.next([{ isValid: true, numberOfItems: 1 }, { isValid: true, numberOfItems: 2 }, { isValid: true, numberOfItems: 3 }]);
  });
}
