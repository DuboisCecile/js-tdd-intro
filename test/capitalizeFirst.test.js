const assert = require('assert');
const capitalizeFirst = require('../capitalizeFirst');


describe('capitalizeFirst', () => {
    it('is a function accepting serveral words', () => {
        assert.strictEqual(capitalizeFirst('i am learning TDD'), 'I Am Learning TDD');
    });
  
    it('transforms javaScript correctly', () => {
      assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
    });

    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirst(''), '');
    });
});