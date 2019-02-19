const { humanCatDogYears } = require('../src');

describe('numberToReversedDigits', () => {
it('Returns an array of human, cat and dog years', () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    expect(humanCatDogYears(50)).toEqual([50, 216, 264])
    expect(humanCatDogYears(0)).toEqual([0, 0, 0])
    expect (humanCatDogYears(-10)).toEqual([0, 0, 0])
    });
});     