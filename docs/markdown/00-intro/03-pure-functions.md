## Avant d'aller plus loin : fonction pure

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

