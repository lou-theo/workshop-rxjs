import { filter, map, retry } from 'rxjs';
import { getOrders } from './api';
import { Order } from './models';

getOrders(true)
  .pipe(
    retry(1),
    filter((orders) => orders.every((value) => value.isValid)),
    map((orders) => orders.reduce((acc: number, order: Order) => acc + order.numberOfItems, 0)),
  )
  .subscribe(console.log);
