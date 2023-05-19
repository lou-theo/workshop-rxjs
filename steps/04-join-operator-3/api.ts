import { delay, Observable, of } from 'rxjs';

export function getProductStock(productId: number): Observable<number> {
  let stock = 0;
  let delayTime = 500;
  switch (productId) {
    case 1:
      stock = 2;
      delayTime = 100;
      break;
    case 3:
      stock = 100;
      delayTime = 700;
      break;
  }
  return of(stock).pipe(delay(delayTime));
}
