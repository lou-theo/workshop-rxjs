import { getOrders } from './api';

/**
 * CONTEXTE DE L'EXERCICE :
 * Nous avons une fonction `getOrders()` qui appelle notre "API" et qui retourne des listes d'objets de type `Order` sous forme d'Observable.
 * Problème : parmi les listes d'objets `Order` dans le flux de l'observable, certaines listes contiennent des objets `Order` invalides (isValid = false).
 * Ces listes d'objets contenant au moins un `Order` invalide ne doivent pas être traitées par notre application.
 * Nous voulons ensuite calculer le nombre total d'items dans les listes d'objets `Order` valides.
 */

export const orders$ = getOrders().pipe(
  /**
   * TODO: CHALLENGE 1
   *  Ne pas prendre en compte (filtrer) les listes d'objets `Order` invalides (qui ont au moins 1 Order invalide).
   */

  /**
   * TODO: CHALLENGE 2
   *  Calculer le nombre total d'items dans les listes où tous les `Order`sont valides (pré-filtré par l'étape précédente).
   */

  /**
   * TODO: CHALLENGE 3
   *  Augmenter la difficulté en utilisant `getOrders(true)` comme source d'observable (paramètre `increaseDifficulty` à true).
   */
);

orders$.subscribe(console.log);
