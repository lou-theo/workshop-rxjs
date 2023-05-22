import { of } from 'rxjs';

export const sentence =
  "Yeah you get it, by running the command with '-s' option you will execute the solution instead of the exercise.";
export const helloWorld$ = of(sentence);

helloWorld$.subscribe(console.log);
