# Oublier d'unsubscribe

```typescript [9]
@Component({
  selector: 'app-component',
  template: ``
})
export class Component implements OnInit {
  constructor(private service: Service) {}

  ngOnInit() {
    this.service.getData().subscribe(data => {
      // do something
    });
  }
}
```

<br/>

Memory leaks, comportements innatendus, etc.

##==##

# The classic way

```typescript [11-13|6|17]
@Component({
  selector: 'app-component',
  template: ``
})
export class Component implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private service: Service) {}

  ngOnInit() {
    this.subscription = this.service.getData().subscribe(data => {
      // do something
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
```

##==##

# The elegant way

```typescript [11,13-14|4|10,12]
@Component({
  selector: 'app-component',
  template: `
    <ng-container *ngIf="data$ | async as data">
      <!-- do something -->
    </ng-container>
  `
})
export class Component {
  private data = undefined;
  protected data$ = this.service.getData().pipe(
    tap(data => this.data = data)
    // do (eventually) something with operators
  );

  constructor(private service: Service) {}
}
```

<br/>

[NgRx Let](https://ngrx.io/guide/component/let) pour un resultat plus propre 

##==##

# The ultimate way (depuis Angular 16)

```typescript [10]
@Component({
  selector: 'app-component',
  template: ``
})
export class Component implements OnInit {
  constructor(private service: Service) {}

  ngOnInit() {
    this.service.getData()
      .pipe(takeUntilDestroyed())
      .subscribe(data => {
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

-   L'observable se termine tout seul (notamment avec un `HttpClient`)
-   Avec l'opérateur `first` ou `take` (on sait qu'on aura un nombre fini d'éléments ET avant destruction du composant)
-   Le cycle de vie du composant est le même que celui de l'observable
<!-- .element: class="list-fragment" -->
