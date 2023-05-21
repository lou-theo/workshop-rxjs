<!-- .slide: class="with-code" -->

# Un opérateur n'est rien de plus qu'une fonction !

```typescript
const multicast$ = monocast$.pipe(
  share({
    connector: () => new ReplaySubject(1),
    resetOnError: true,
    resetOnRefCountZero: false,
    resetOnComplete: false,
  })
);
```

<!-- .element: class="big-code block" -->

##==##

<!-- .slide: class="with-code max-height" -->

# Un opérateur n'est rien de plus qu'une fonction !

```typescript
function shareKeepState<T>(bufferSize: number) {
  return share({
    connector: () => new ReplaySubject<T>(bufferSize),
    resetOnError: false,
    resetOnRefCountZero: false,
    resetOnComplete: false,
  });
}
const multicast$ = monocast$.pipe(shareKeepState(1));
```

<!-- .element: class="big-code block" -->


