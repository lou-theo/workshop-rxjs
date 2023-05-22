import { map, Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/internal/testing/TestScheduler';
import { foodLeft$ as exerciseFoodLeft$ } from './exercise';
import { foodLeft$ as solutionFoodLeft$ } from './solution';

const CHALLENGE_MAX = 2;

const isSolution = process.env.FILE_TYPE == 'solution';
let challenge = 0;
try {
  challenge = parseInt(process.env.CHALLENGE, 10);
} catch {}
challenge = challenge || CHALLENGE_MAX;

const foodLeft$: Observable<any> = isSolution ? solutionFoodLeft$ : exerciseFoodLeft$;

describe('02-join-operator-1', () => {
  let testScheduler: TestScheduler;
  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  if (challenge === 1) {
    it(`CHALLENGE ${challenge}`, async () => {
      testScheduler.run(({ expectObservable }) => {
        const actual$ = foodLeft$.pipe(map((responses) => Object.values(responses).length));
        const values = {
          a: 2,
        };
        const expected = '500ms (a|)';
        expectObservable(actual$).toBe(expected, values);
      });
    });
  }

  if (challenge === 2) {
    it(`CHALLENGE ${challenge}`, async () => {
      testScheduler.run(({ expectObservable }) => {
        const values = {
          a: -3,
        };
        const expected = '500ms (a|)';
        expectObservable(foodLeft$).toBe(expected, values);
      });
    });
  }
});
