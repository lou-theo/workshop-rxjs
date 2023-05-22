import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/internal/testing/TestScheduler';
import { validOrders } from './api';
import { orders$ as exerciseOrders$ } from './exercise';
import { orders$ as solutionOrders$ } from './solution';

const CHALLENGE_MAX = 3;

const isSolution = process.env.FILE_TYPE == 'solution';
let challenge = 0;
try {
  challenge = parseInt(process.env.CHALLENGE, 10);
} catch {}
challenge = challenge || CHALLENGE_MAX;

const orders$: Observable<any> = isSolution ? solutionOrders$ : exerciseOrders$;

describe('01-basic-operator', () => {
  let testScheduler: TestScheduler;
  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  if (challenge === 1) {
    it(`CHALLENGE ${challenge}`, () => {
      testScheduler.run(({ expectObservable }) => {
        const values = {
          a: validOrders,
        };
        const expected = '(a|)';
        expectObservable(orders$).toBe(expected, values);
      });
    });
  }

  if (challenge === 2 || challenge === 3) {
    it(`CHALLENGE ${challenge}`, () => {
      testScheduler.run(({ expectObservable }) => {
        const values = {
          a: 6,
        };
        const expected = '(a|)';
        expectObservable(orders$).toBe(expected, values);
      });
    });
  }
});
