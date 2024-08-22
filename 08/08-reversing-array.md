# Reversing an array

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Which variant do you expect to be useful in more situations? Which one runs faster?

Les tableaux ont une méthode reverse qui modifie le tableau en inversant l'ordre dans lequel ses éléments apparaissent. Pour cet exercice, écrivez deux fonctions, reverseArray et reverseArrayInPlace. La première, reverseArray, prend un tableau comme argument et produit un nouveau tableau qui contient les mêmes éléments dans l'ordre inverse. La seconde, reverseArrayInPlace, fait ce que fait la méthode reverse : elle modifie le tableau donné comme argument en inversant ses éléments. Aucune des deux ne peut utiliser la méthode reverse standard.

Quelle variante pensez-vous être utile dans plus de situations ? Laquelle s'exécute plus rapidement ?


```js
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

console.log(arrayValue);
// → [5, 4, 3, 2, 1]
```
