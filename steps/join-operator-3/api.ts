import { delay, Observable, of } from 'rxjs';
import { getRandomNumber } from '../common/random';

export function getProductStock(productId: number): Observable<number> {
  let stock = 0;
  switch (productId) {
    case 1:
      stock = 2;
      break;
    case 3:
      stock = 100;
      break;
  }
  return of(stock).pipe(delay(getRandomNumber(100, 700)));
}
