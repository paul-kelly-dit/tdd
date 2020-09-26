const sum = require('./math');

test('sum - add 1 + 2 should equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('sum - add 1 + 2 should NOT equal 4', () => {
    expect(sum(1, 2)).not.toBe(4);
});