const assert = require('assert');



/* Commence par créer les tests, avec au moins trois cas de test :
une chaîne avec plusieurs mots
une chaîne avec un seul mot (voire une seule lettre)
une chaîne vide */

assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

assert.strictEqual(capitalizeFirstLetters(''), '');
