const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
  it('check if it is a square', () => {
    assert.strictEqual(new Rectangle(10, 5).isSquare(), false);
    assert.strictEqual(new Rectangle(10, 10).isSquare(), true);
  });

  it('area is calculated correctly', () => {
    assert.strictEqual(new Rectangle(12, 28).getArea(), 336);
  });

  it('perimeter is calculated correctly', () => {
    assert.strictEqual(new Rectangle(17, 23).getPerimeter(), 80);
  });

});
