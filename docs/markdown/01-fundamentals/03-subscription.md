# Et... comment on connecte les 2 ?

<!-- .slide: class="with-code" -->

<div class="fragment">

```typescript
import { getMyAwesomeObservable } from './my-awesome-observable';
import { observer } from './my-awesome-observer';

getMyAwesomeObservable().subscribe(observer);
```

<!-- .element: class="big-code block" -->

</div>
<div class="fragment">

```typescript
getMyAwesomeObservable().subscribe(observer);
```

<!-- .element: class="big-code block" -->

</div>

Notes:
- On souscrit à l'observable avec l'observer
- On peut souscrire à un observable autant de fois qu'on veut

##==##

<!-- .slide: class="with-code" -->

# Subscription

```typescript
import { Subscription } from 'rxjs';
import { getMyAwesomeObservable } from './my-awesome-observable';
import { observer } from './my-awesome-observer';

const subscription: Subscription = getMyAwesomeObservable().subscribe(observer);
subscription.unsubscribe();
```

<!-- .element: class="big-code block" -->
