import { forkJoin, map, tap } from 'rxjs';
import { getAttendeesNumber, getFoodOrdersNumber } from './api';

forkJoin({ attendeesNumber: getAttendeesNumber(), foodOrdersNumber: getFoodOrdersNumber() })
  .pipe(
    tap(console.log),
    map(({ attendeesNumber, foodOrdersNumber }) => foodOrdersNumber - attendeesNumber),
  )
  .subscribe(console.log);
