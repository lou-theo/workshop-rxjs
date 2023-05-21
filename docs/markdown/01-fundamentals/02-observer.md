# Les Observers

<!-- .slide: class="with-code" -->

A quoi ressemblent-ils ? 😱

<br/>

<div class="fragment">

Tout simplement :

```typescript
const observer = {
  next: (x) => console.log("Observer got a next value: " + x),
  error: (err) => console.error("Observer got an error: " + err),
  complete: () => console.log("Observer got a complete notification"),
};
```

<!-- .element: class="big-code block" -->

</div>

Notes:
Les Obervers sont simplement un set de callbacks
