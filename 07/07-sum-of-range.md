# The sum of a range


Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].


Écrivez une fonction range qui prend deux arguments, start et end, et renvoie un tableau contenant tous les nombres de start jusqu'à end (inclus).

Ensuite, écrivez une fonction sum qui prend un tableau de nombres et renvoie la somme de ces nombres. Exécutez le programme d'exemple et voyez s'il renvoie effectivement 55.

En guise de tâche supplémentaire, modifiez votre fonction range pour prendre un troisième argument facultatif qui indique la valeur « step » utilisée lors de la construction du tableau. Si aucun step n'est indiqué, les éléments augmentent par incréments de un, ce qui correspond à l'ancien comportement. L'appel de fonction range(1, 10, 2) doit renvoyer [1, 3, 5, 7, 9]. Assurez-vous qu'il fonctionne également avec des valeurs step négatives afin que range(5, 2, -1) produise [5, 4, 3, 2].


```
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

console.log(sum(range(1, 10)));
// → 55
```
