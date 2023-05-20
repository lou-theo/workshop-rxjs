import { filter, map, retry } from 'rxjs';
import { getOrders } from './api';
import { Order } from './models';

export const orders$ = getOrders(true).pipe(
  /**
   * TODO: CHALLENGE 1
   *  Ne pas prendre en compte (filtrer) les listes d'objets `Order` invalides (qui ont au moins 1 Order invalide).
   */
  filter((orders: Order[]) => orders.every((order) => order.isValid)),

  /**
   * TODO: CHALLENGE 2
   *  Calculer le nombre total d'items dans les listes où tous les `Order`sont valides (pré-filtré par l'étape précédente).
   */
  map((orders: Order[]) => orders.reduce((acc: number, order: Order) => acc + order.numberOfItems, 0)),

  /**
   * TODO: CHALLENGE 3
   *  Augmenter la difficulté en utilisant `getOrders(true)` comme source d'observable (paramètre `increaseDifficulty` à true).
   */
  retry(1),
);

orders$.subscribe(console.log);
