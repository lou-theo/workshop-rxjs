import { getAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything } from './api';

/**
 * CONTEXTE DE L'EXERCICE :
 * Nous avons une fonction `getAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything()` qui appelle notre "API" et qui retourne un nombre sous forme d'Observable.
 * Problème : nous voulons éviter d'appeler trop de fois la ou les ressources utilisées pour avoir le résultat et nous souhaitons mettre "en cache" ce dernier.
 * Un log `Doing very resource intensive computation` est affiché à chaque appel de la fonction, vous saurez donc si elle est appelée plusieurs fois ou non.
 */

export const result$ = getAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything(false).pipe();

/**
 * TODO: CHALLENGE 1
 *  Exécuter le code et observer le résultat dans la console.
 */

/**
 * TODO: CHALLENGE 2
 *  Utiliser l'opérateur `share()` pour partager le résultat de l'observable entre les différents subscribers.
 *  Quel est le résultat dans la console ?
 *  Explorer la doc de [`ShareConfig`](https://rxjs.dev/api/index/interface/ShareConfig) pour essayer de comprendre.
 */

/**
 * TODO: CHALLENGE 3
 *  Jouer avec les paramètres de `share()` pour trouver une solution qui permet de partager le résultat de l'observable entre les différents subscribers sans plusieurs exécutions de l'observable donné par' `getAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything()`
 */

/**
 * TODO: CHALLENGE 4
 *  Passer le paramètre `withError` à `true` dans l'appel de `getAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything()` pour simuler une erreur (ne pas mettre de `retry()`).
 *  Observez le résultat dans la console.
 */

result$.subscribe({
  next: (value) => console.log(`First subscriber: ${value}`),
  error: (error) => console.log(`First subscriber: ${error}`),
});
result$.subscribe({
  next: (value) => console.log(`Second subscriber: ${value}`),
  error: (error) => console.log(`Second subscriber: ${error}`),
});
