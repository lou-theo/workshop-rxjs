import { Observable, of } from 'rxjs';

/**
 * CONTEXTE DE L'EXERCICE :
 * Nous souhaitons savoir combien de part de nbourriture il restera (ou manquera) pour notre événement. Pour cela nous avons 2 sources d'observables :
 * - `getAttendeesNumber()` qui retourne le nombre de participants à l'événement
 * - `getFoodOrdersNumber()` qui retourne le nombre de part de parts commandées
 * Problème : ces 2 opérations sont asynchrones et il nous faut donc trouver un moyen de les combiner pour avoir le résultat attendu.
 */

/**
 * TODO: CHALLENGE 1
 *  Trouver un moyen de combiner les 2 observables pour avoir dans le même observable le nombre de participants et le nombre de parts commandées.
 *  Astuce: utiliser l'opérateur `tap()` pour afficher les valeurs dans la console et faciliter le debug. (`tap(console.log)`)
 */
export const foodLeft$: Observable<unknown> = of({});

/**
 * TODO: CHALLENGE 2
 *  Calculer le nombre de parts de nourriture restantes (ou manquantes) en soustrayant le nombre de participants au nombre de parts commandées.
 */

foodLeft$.subscribe(console.log);
