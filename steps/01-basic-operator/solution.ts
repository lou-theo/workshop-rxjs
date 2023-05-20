import { filter, map, retry } from 'rxjs';
import { getOrders } from './api';
import { Order } from './models';

export const orders$ = getOrders(true).pipe(
  // CHALLENGE 1
  filter((orders: Order[]) => orders.every((order) => order.isValid)),

  // CHALLENGE 2
  map((orders: Order[]) => orders.reduce((acc: number, order: Order) => acc + order.numberOfItems, 0)),

  // CHALLENGE 3
  retry(1),
);

orders$.subscribe(console.log);
