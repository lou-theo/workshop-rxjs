import { of } from 'rxjs';

export const sentence = "You've done it! You are definitely ready for the workshop!";
export const helloWorld$ = of(sentence);

helloWorld$.subscribe(console.log);
