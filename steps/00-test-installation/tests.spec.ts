import { helloWorld$ as exerciseHelloWorld$, sentence as exerciseSentence } from './exercise';
import { helloWorld$ as solutionHelloWorld$, sentence as solutionSentence } from './solution';

const isSolution = process.env.FILE_TYPE == 'solution';
const helloWorld$ = isSolution ? solutionHelloWorld$ : exerciseHelloWorld$;

describe('00-test-installation', () => {
  it('should get the good sentence', (done) => {
    helloWorld$.subscribe((text) => {
      if (isSolution) {
        expect(text).toBe(solutionSentence);
      } else {
        expect(text).toBe(exerciseSentence);
      }
      done();
    });
  });
});
