# Complete ne veut pas dire Finally

## Ce qu'on a l'habitude de faire avec les promesses

_callback style_

```typescript
promise
  .then(() => {
    // do something
  })
  .catch((e) => {
    // handle error
  })
  .finally(() => {
    // do something, whether or not there is an error
  });
```

<br/>

_await style_

```typescript
try {
  await promise;
  // do something
} catch (e) {
  // handle error
} finally {
  // do something, whether or not there is an error
}
```

##==##

<!-- .slide: class="with-code max-height" -->

# Complete ne veut pas dire Finally

## Ce qu'on aimerait faire avec les observables

<!-- prettier-ignore-start -->
```typescript
observable.subscribe({
    next: () => { /* do something */ },
    error: (e) => { /* handle error */ },
    complete: () => { /* do something, whether or not there is an error */ },
});
```
<!-- prettier-ignore-end -->

<!-- .element: class="big-code block" -->

##==##

<!-- .slide: class="with-code max-height" -->

# Complete ne veut pas dire Finally

## Ce qu'on peut faire avec les observables

<!-- prettier-ignore-start -->
```typescript [7]
observable
  .subscribe({
    next: () => { /* do something */ },
    error: (e) => { /* handle error */ },
    complete: () => { /* do something only when observable is complete */ },
  })
  .add(() => { /* do something, whether or not there is an error */  });
```
<!-- prettier-ignore-end -->

<!-- .element: class="big-code block" -->

Notes:
- `add` est une méthode de `Subscription`
