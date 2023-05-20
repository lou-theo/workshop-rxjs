import { Observable } from 'rxjs';
import { Product } from './models';

/**
 * CONTEXTE DE L'EXERCICE :
 * Nous avons une liste de `Product` (`PRODUCTS`, définie dans `api.ts`).
 * Problème : nous ne connaissons pas le stock de chaque produit. Pour le connaitre il faut appeler l'API `getProductStock()` *pour chaque produit*.
 * Nous souhaitons à la fin avoir une liste de `Product` avec le stock de chaque produit et triée par ordre croissant d'id (on a pas envie que les produits soit triés en fonction du temps de réponse de l'API).
 */

/**
 * TODO: CHALLENGE 2
 *  Compléter la fonction `getProductWithStock()`
 * @param product `Product` dont on souhaite connaitre le stock.
 * @returns Un observable qui émet un `Product` avec le stock de ce produit. (`Required<Product>` signifie que toutes les propriétés de `Product` sont requises, dont la propriété `stock`).
 */
const getProductWithStock = (product: Product): Observable<Required<Product>> => undefined;

/**
 * TODO: CHALLENGE 1
 *  Trouver un moyen pour transformer notre liste de `Product` en un observable qui émet des `Product` qu'on pourra ensuite transformer
 */
export const products$: Observable<unknown> = undefined;

/**
 * TODO: CHALLENGE 3
 *  Utiliser la fonction que l'on vient de créer pour transformer chaque `Product` en `Product` avec le stock.
 */

/**
 * TODO: CHALLENGE 4
 *  Transformer notre Observable qui émet des `Product` avec le stock en un Observable qui émet un unique tableau de `Product` avec le stock.
 *  (Eh oui, ce sera quand même plus facile à manipuler dans un front par exemple)
 */

/**
 * TODO: CHALLENGE 5
 *  Trier le tableau de `Product` par ordre croissant d'id.
 *  Astuce: utiliser la fonction `sortProducts()` de `api.ts`
 */

products$.subscribe(console.log);
