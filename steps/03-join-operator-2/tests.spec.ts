import { map, Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/internal/testing/TestScheduler';
import { addressCompletions$ as exerciseAddressCompletions$ } from './exercise';
import { addressCompletions$ as solutionAddressCompletions$ } from './solution';

const CHALLENGE_MAX = 2;

const isSolution = process.env.FILE_TYPE == 'solution';
let challenge = 0;
try {
  challenge = parseInt(process.env.CHALLENGE, 10);
} catch {}
challenge = challenge || CHALLENGE_MAX;

const addressCompletions$: Observable<any> = isSolution ? solutionAddressCompletions$ : exerciseAddressCompletions$;

describe('03-join-operator-2', () => {
  let testScheduler: TestScheduler;
  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  if (challenge === 1) {
    it(`CHALLENGE ${challenge}`, async () => {
      testScheduler.run(({ expectObservable }) => {
        const actual$ = addressCompletions$.pipe(map((array) => array.length));
        const values = {
          a: 4,
          b: 1,
        };
        const expected = 'a 899ms b';
        expectObservable(actual$).toBe(expected, values);
      });
    });
  }

  if (challenge === 2) {
    it(`CHALLENGE ${challenge}`, async () => {
      testScheduler.run(({ expectObservable }) => {
        const actual$ = addressCompletions$.pipe(map((array) => array.length));
        const values = {
          b: 1,
        };
        const expected = '1300ms b';
        expectObservable(actual$).toBe(expected, values);
      });
    });
  }
});
