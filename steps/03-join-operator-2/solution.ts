import { debounceTime, switchMap, tap } from 'rxjs';
import { getAddressesCompletion, getUserInput } from './api';

export const addressCompletions$ = getUserInput().pipe(
  tap(console.log),

  // CHALLENGE 2
  debounceTime(400),

  // CHALLENGE 1
  switchMap(getAddressesCompletion),
);

addressCompletions$.subscribe(console.log);
