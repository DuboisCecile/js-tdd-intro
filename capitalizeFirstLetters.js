const assert = require('assert');

function capitalizeFirstLetters(input) {
    const capInput = input.split(' ').map(element => element.charAt(0).toUpperCase() + element.substring(1));
    return capInput.join(' ');
}




/* Commence par créer les tests, avec au moins trois cas de test :
une chaîne avec plusieurs mots
une chaîne avec un seul mot (voire une seule lettre)
une chaîne vide */

assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

assert.strictEqual(capitalizeFirstLetters(''), '');
