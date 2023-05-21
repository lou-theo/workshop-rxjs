# Les Observables - leurs capacités

![w-1000 center](./assets/images/what-superpowers.gif)

##==##

# Les Observables - leurs capacités

Ce que peut faire un Observable :

- Emettre un nombre indéterminé de valeurs avec `next`
- Signaler une erreur avec `error`
- Informer de la fin du flux avec `complete`
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="with-code max-height" -->

# Créer un Observable

```typescript [4|5-6,13|9,14]
import { Observable, Subscriber } from 'rxjs';

export function getMyAwesomeObservable(withError: boolean = false): Observable<number> {
  return new Observable((subscriber: Subscriber<number>) => {
    subscriber.next(8);
    subscriber.next(12);

    if (withError) {
      subscriber.error('Oh no ! :(');
    }

    setTimeout(() => {
      subscriber.next(42);
      subscriber.complete();
    }, 1000);
  });
}
```

Notes:
- Créer un observable c'est faire un callback qui prend un subscriber en paramètre

##==##

<!-- .slide: class="with-code" -->

# Créer *facilement* un Observable : les factories

Plein de fonctions existent ! *(voir [la doc](https://rxjs.dev/guide/operators#creation-operators-1))*

<div class='fragment'>

[of](https://rxjs.dev/api/index/function/of)
```typescript
import { of } from 'rxjs';

of(1, 2, 3); // 3 événements : 1, 2, 3
of([1, 2, 3]); // 1 événement : [1, 2, 3]
```

<!-- .element: class="big-code block" -->

</div>
<div class='fragment'>

[from](https://rxjs.dev/api/index/function/from)
```typescript
import { from } from 'rxjs';

from([1, 2, 3]); // 3 événements : 1, 2, 3
```

<!-- .element: class="big-code block" -->

</div>


Notes:

Le but n'est pas de tout lister, il y en a trop
- `of` : crée un observable à partir d'une liste d'éléments
- `from` : crée un observable à partir d'à peu près n'importe quoi (array, promise, iterable, etc.)
