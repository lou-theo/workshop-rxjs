import { delay, Observable, of } from 'rxjs';
import { Product } from './models';

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Mug Google', price: 50 },
  { id: 3, name: 'Sticker Google', price: 10 },
  { id: 2, name: 'T-shirt GCP certified', price: 120 },
];

export function getProductStock(productId: number): Observable<number> {
  let stock = 0;
  let delayTime = 500;
  switch (productId) {
    case 1:
      stock = 2;
      delayTime = 700;
      break;
    case 3:
      stock = 100;
      delayTime = 100;
      break;
  }
  return of(stock).pipe(delay(delayTime));
}

export function sortProducts(products: Product[]): Product[] {
  return products.sort((p1: Product, p2: Product) => p1.id - p2.id);
}
