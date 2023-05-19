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

# Complete ne veut pas dire Finally

## Ce qu'on aimerait faire avec les observables

```typescript
observable.subscribe({
  next: () => {
    // do something
  },
  error: (e) => {
    // handle error
  },
  complete: () => {
    // do something, whether or not there is an error
  },
});
```

##==##

# Complete ne veut pas dire Finally

## Ce qu'on peut faire avec les observables

```typescript [13-15]
observable
  .subscribe({
    next: () => {
      // do something
    },
    error: (e) => {
      // handle error
    },
    complete: () => {
      // do something only when observable is complete
    },
  })
  .add(() => {
    // do something, whether or not there is an error
  });
```
