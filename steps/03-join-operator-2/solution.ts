import { debounceTime, switchMap, tap } from 'rxjs';
import { getAddressesCompletion, getUserInput } from './api';

getUserInput().pipe(
  tap(console.log),
  debounceTime(400),
  switchMap(getAddressesCompletion),
).subscribe(console.log)
