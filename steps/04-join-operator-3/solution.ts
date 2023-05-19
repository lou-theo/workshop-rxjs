import { from, map, mergeMap, reduce } from 'rxjs';
import { getProductStock } from './api';
import { Product } from './models';

const PRODUCTS: Product[] = [
  { id: 1, name: 'Mug Google', price: 50 },
  { id: 2, name: 'T-shirt GCP certified', price: 120 },
  { id: 3, name: 'Sticker Google', price: 10 },
];

from(PRODUCTS)
  .pipe(
    mergeMap((product) => getProductStock(product.id).pipe(map((stock) => ({ ...product, stock })))),
    reduce((accumulator: Product[], product: Product) => {
      const products = [...accumulator, product];
      products.sort((p1: Product, p2: Product) => p1.id - p2.id);
      return products;
    }, [] as Product[]),
  )
  .subscribe((product) => console.log(product));
