<!-- .slide: class="with-code" -->

# Avant de s'exercer

## [Tap](https://rxjs.dev/api/index/function/tap), l'opérateur side-effect

```typescript [4]
import { of, tap } from "rxjs";

of(1, 2, 3)
  .pipe(tap((n) => console.log(`tap: ${n}`)))
  .subscribe((n) => console.log(`subscribe: ${n}`));
```

<!-- .element: class="big-code block" -->

Notes:

- Pratique pour debug
- Assez souvent utilisé
- Rappel très rapide sur les fonctions pures, aller slide du dessous si besoin

##--##

## Rappels : fonction pure

```typescript
let FOO = 2;

function impure(n: number) {
  return n * FOO;
}

console.log(impure(2));

function pure(a: number, b: number) {
  return a * b;
}

console.log(pure(2, FOO));
```

```typescript
let FOO = 2;

function impureWithSideEffect(n: number) {
  FOO = n;
}

impureWithSideEffect(3);
```

Notes:

- une fonction pure est une fonction qui ne dépend que de ces paramètres
- et qui pour les mêmes paramètres renverra toujours le même résultat
- une fonction pure ne doit pas non plus avoir de side-effect
