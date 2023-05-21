# Oublier d'unsubscribe

```typescript [9]
@Component({
  selector: "app-component",
  template: ``,
})
export class Component implements OnInit {
  constructor(private service: Service) {}

  ngOnInit() {
    this.service.getData().subscribe((data) => {
      // do something
    });
  }
}
```

<br/>

Memory leaks, comportements innatendus, etc.

##==##

# The classic way

```typescript [11-15|6|19]
@Component({
  selector: "app-component",
  template: ``,
})
export class Component implements OnInit, OnDestroy {
  private subscriptions: Subscription;

  constructor(private service: Service) {}

  ngOnInit() {
    this.subscriptions.add(
      this.service.getData().subscribe((data) => {
        // do something
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
```

##==##

# The elegant way

```typescript [11,13-14|4|10,12]
@Component({
  selector: "app-component",
  template: `
    <ng-container *ngIf="data$ | async as data">
      <!-- do something -->
    </ng-container>
  `,
})
export class Component {
  private data = undefined;
  protected data$ = this.service.getData().pipe(
    tap((data) => (this.data = data))
    // do (eventually) something with 03-operators
  );

  constructor(private service: Service) {}
}
```

<br/>

<span class="fragment fade-in">
<a href='https://ngrx.io/guide/component/let'>NgRx Let</a> pour un résultat plus propre 
</span>

##==##

# The ultimate way (depuis Angular 16)

```typescript [10]
@Component({
  selector: "app-component",
  template: ``,
})
export class Component implements OnInit {
  constructor(private service: Service) {}

  ngOnInit() {
    this.service
      .getData()
      .pipe(takeUntilDestroyed())
      .subscribe((data) => {
        // do something
      });
  }
}
```

##==##

# On a pas toujours besoin d'unsubscribe

<div class="full-center">
 <img src="./assets/images/confused.webp">
</div>

##==##

# On a pas toujours besoin d'unsubscribe

Cela reste des cas particuliers :

- L'observable se termine tout seul (notamment avec un `HttpClient`)
- Avec l'opérateur `first` ou `take` (on sait qu'on aura un nombre fini d'éléments ET avant destruction du composant)
- Le cycle de vie du composant est le même que celui de l'observable
<!-- .element: class="list-fragment" -->
