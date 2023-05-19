import { ReplaySubject, retry, share } from 'rxjs';
import { getVeryResourceIntensiveComputation } from './api';

const result = getVeryResourceIntensiveComputation(false).pipe(
  retry(1),
  share({
    connector: () => new ReplaySubject<number>(1),
    resetOnComplete: false,
  }),
);

result.subscribe((value) => console.log(`First subscriber: ${value}`));
result.subscribe((value) => console.log(`Second subscriber: ${value}`));
