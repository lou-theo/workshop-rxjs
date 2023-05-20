import { tap } from 'rxjs';
import { getUserInput } from './api';

/**
 * CONTEXTE DE L'EXERCICE :
 * Nous avons créé un observable à partir d'un input utilisateur (`getUserInput()`), cet input est un champ de recherche d'adresse.
 * Nous avons à notre disposition une API qui nous permet de récupérer des adresses à partir d'une recherche (`getAddressesCompletion()`).
 * Problème : nous souhaitons d'une part transformer notre input utilisateur en liste d'autocomplétion à chaque fois que l'utilisateur tape une lettre. D'autre part nous ne voulons pas spammer l'API à chaque fois que l'utilisateur tape une lettre.
 */

export const addressCompletions$ = getUserInput().pipe(tap(console.log));

/**
 * TODO: CHALLENGE 1
 *  Trouver un moyen pour transformer chaque émission `getUserInput()` en liste d'autocomplétion à l'aide de l'API `getAddressesCompletion()`.
 */

/**
 * TODO: CHALLENGE 2
 *  Trouver un moyen pour ne pas spammer l'API à chaque fois que l'utilisateur tape une lettre.
 *  On peut tabler sur 400 à 600ms entre chaque émission de `getUserInput()` pour être correct.
 */

addressCompletions$.subscribe(console.log);
