import { concatMap, from, map, mergeMap, Observable, reduce, toArray } from 'rxjs';
import { getProductStock, PRODUCTS, sortProducts } from './api';
import { Product } from './models';

// CHALLENGE 2
const getProductWithStock = (product: Product): Observable<Required<Product>> =>
  getProductStock(product.id).pipe(map((stock) => ({ ...product, stock })));

// CHALLENGE 1 & 5
export const products$ = from(sortProducts(PRODUCTS))
  .pipe(
    // CHALLENGE 3
    concatMap(getProductWithStock),

    // CHALLENGE 4
    toArray()
  );

// ALTERNATIVE SOLUTION
// CHALLENGE 1
// export const products$ = from(PRODUCTS).pipe(
//   // CHALLENGE 3
//   mergeMap(getProductWithStock),

//   // CHALLENGE 4
//   reduce((accumulator: Product[], product: Product) => {
//     const products = [...accumulator, product];
//     // CHALLENGE 5
//     return sortProducts(products);
//   }, [] as Product[]),
// );

products$.subscribe(console.log);
