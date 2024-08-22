# Bean Counting


You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.



Vous pouvez obtenir le N-ième caractère, ou lettre, d'une chaîne en écrivant "string"[N]. La valeur renvoyée sera une chaîne contenant un seul caractère (par exemple, "b"). Le premier caractère a la position 0, ce qui fait que le dernier se trouve à la position string.length - 1. En d'autres termes, une chaîne de deux caractères a une longueur de 2 et ses caractères ont les positions 0 et 1.

Écrivez une fonction countBs qui prend une chaîne comme seul argument et renvoie un nombre qui indique le nombre de caractères majuscules « B » dans la chaîne.

Ensuite, écrivez une fonction appelée countChar qui se comporte comme countBs, sauf qu'elle prend un deuxième argument qui indique le caractère à compter (au lieu de compter uniquement les caractères majuscules « B »). Réécrivez countBs pour utiliser cette nouvelle fonction.


```js

console.log(countBs("BBC"));
// → 2

console.log(countChar("kakkerlak", "k"));
// → 4
```
