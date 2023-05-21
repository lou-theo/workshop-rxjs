# Appliquer un traitement

<!-- .slide: class="with-code" -->

```typescript
const isEven = (number: number): boolean => number % 2 === 0;

numbers$.subscribe((number) => {
  if (isEven(number)) {
    // do something
  }
});
```

<!-- .element: class="big-code block" -->

##==##

<!-- .slide: class="with-code max-height" -->

# Appliquer un traitement à la source !

```typescript [4-6]
import { filter } from "rxjs";

const isEven = (number: number): boolean => number % 2 === 0;
const evenNumbers$ = numbers$.pipe(
  filter(isEven) // équivalent à : `filter((number) => isEven(number))`
);

evenNumbers$.subscribe((evenNumber) => {
  // do something
});
```

<!-- .element: class="big-code block" -->

##==##

<!-- .slide: class="with-code max-height" -->

# On peut cumuler les traitements !

<!-- prettier-ignore-start -->

```typescript [3-6]
import { filter } from "rxjs";

const doubledEvenNumbers$ = numbers$.pipe(
  filter(isEven),
  map(double)
);

doubledEvenNumbers$.subscribe((doubledEvenNumber) => {
  // do something
});
```

<!-- prettier-ignore-end -->

<!-- .element: class="big-code block" -->
