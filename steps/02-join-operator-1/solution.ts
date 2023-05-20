import { forkJoin, map, tap } from 'rxjs';
import { getAttendeesNumber, getFoodOrdersNumber } from './api';

// CHALLENGE 1
export const foodLeft$ = forkJoin({
  attendeesNumber: getAttendeesNumber(),
  foodOrdersNumber: getFoodOrdersNumber(),
}).pipe(
  tap(console.log),

  // CHALLENGE 2
  map(({ attendeesNumber, foodOrdersNumber }) => foodOrdersNumber - attendeesNumber),
);

foodLeft$.subscribe(console.log);
