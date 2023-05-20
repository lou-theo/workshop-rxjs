import { forkJoin, map, tap } from 'rxjs';
import { getAttendeesNumber, getFoodOrdersNumber } from './api';

/**
 * TODO: CHALLENGE 1
 *  Trouver un moyen de combiner les 2 observables pour avoir dans le même observable le nombre de participants et le nombre de parts commandées.
 *  Astuce: utiliser l'opérateur `tap()` pour afficher les valeurs dans la console et faciliter le debug. (`tap(console.log)`)
 */
export const foodLeft$ = forkJoin({
  attendeesNumber: getAttendeesNumber(),
  foodOrdersNumber: getFoodOrdersNumber(),
}).pipe(
  tap(console.log),

  /**
   * TODO: CHALLENGE 2
   *  Calculer le nombre de parts de nourriture restantes (ou manquantes) en soustrayant le nombre de participants au nombre de parts commandées.
   */
  map(({ attendeesNumber, foodOrdersNumber }) => foodOrdersNumber - attendeesNumber),
);

foodLeft$.subscribe(console.log);
