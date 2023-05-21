# Le lien entre Observable et Observer est un flux

<div class="full-center">
 <img src="./assets/images/pattern-observer.png">
</div>

Notes:

- Ici on a 3 flux distincts, chacun a sa propre vie

##==##

# Représentation d'un flux : Marble diagram

![w-1000 center](./assets/images/diagrams/marbles_illustration.svg)

Notes:

Dans l'ordre :

- flux vide, aucun event, aucune erreur, aucune completion
- flux sans event qui fini par une completion
- flux sans event qui fini par une erreur
- flux avec 2 events qui ne fini pas

On peut avoir des events avec UNE completion ou UNE erreur, mais pas les deux
