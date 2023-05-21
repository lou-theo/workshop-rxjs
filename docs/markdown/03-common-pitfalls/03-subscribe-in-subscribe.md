<!-- .slide: class="with-code" -->

# Subscribe in subscribe

```typescript
const myButton = document.getElementById('my-button');
const formState = { ... };

fromEvent(myButton, 'click').subscribe(() => {
    Service.getData(formState).subscribe(data => {
        // do something
    });
});
```

<!-- .element: class="big-code block" -->

Notes:

- on voit très souvent ce genre de code
- parfois avec encore plus d'imbrication de subscribe

Sauf que :

- souvent on oublie d'unsubscribe
- on fait des subscribes inutiles
- on peut l'écrire de manière plus clair

##==##

<!-- .slide: class="with-code max-height" -->

# Subscribe in subscribe

```typescript [6]
const myButton = document.getElementById('my-button');
const formState = { ... };

fromEvent(myButton, 'click').pipe(
    map(() => formState),
    switchMap(form => Service.getData(form)),
).subscribe(data => {
    // do something
});
```

<!-- .element: class="big-code block" -->
