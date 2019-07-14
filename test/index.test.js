////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
/* eslint-env mocha */
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env
  var chai = require('chai')
  var {
    sum,
    doubleCharacters,
    doubleNumbers,
    backwardsify,
    interleave,
    makeRange,
    countByFirstLetter,
    groupByFirstLetter
  } = require('../index.js')
}
var expect = chai.expect

describe('sum()', () => {
  it('sum() method exists', () => { expect(sum).to.exist })

  it('empty input array returns 0', () => {
    expect(sum([])).to.eq(0)
  })

  it('sums all integers in the first array arg', () => {
    expect(sum([1])).to.eq(1)
    expect(sum([1, 4])).to.eq(5)
    expect(sum([1, 4, 6])).to.eq(11)
    expect(sum([1, 4, 6, 8])).to.eq(19)
    expect(sum([1, 4, 6, 8, 10])).to.eq(29)
  })
})

describe('backwardsify()', () => {
  it('backwardsify() method exists', () => { expect(backwardsify).to.exist })

  it('returns an empty object when the input is empty', () => {
    expect(backwardsify([])).to.deep.eq({})
  })

  it('reverses items in given array', () => {
    expect(backwardsify(['a', 'b', 'c'])).to.deep.eq(['c', 'b', 'a'])
    expect(backwardsify([10, 20])).to.deep.eq([20, 10])
  })
})

describe('doubleNumbers()', () => {
  it('doubleNumbers() method exists', () => { expect(doubleNumbers).to.exist })

  it('no input returns an empty array', () => {
    expect(doubleNumbers([])).to.deep.eq([])
  })

  it('doubles each number in the given array', () => {
    expect(doubleNumbers([1, 2, 3])).to.deep.eq([2, 4, 6])
    expect(doubleNumbers([10, 20, 30, 40])).to.deep.eq([20, 40, 60, 80])
  })
})

describe('doubleCharacters()', () => {
  it('doubleCharacters() method exists', () => { expect(doubleCharacters).to.exist })

  it('blank input returns an empty string', () => {
    expect(doubleCharacters('')).to.eq('')
  })

  it('doubles each letter from input string', () => {
    expect(doubleCharacters('abc')).to.eq('aabbcc')
    expect(doubleCharacters('xyza')).to.eq('xxyyzzaa')
  })
})

describe('interleave()', () => {
  it('interleave() method exists', () => { expect(interleave).to.exist })

  it('on empty input return an empty array', () => {
    expect(interleave([], [])).to.deep.eq([])
  })

  it('on different input array sizes, return null', () => {
    expect(interleave([1], [2, 3]), 'different size input arrays must return null').to.eq(null)
  })

  it('correctly merged values from 2 arrays into single result', () => {
    expect(interleave(['a', 'b', 'c'], ['x', 'y', 'z'])).to.deep.eq(['a', 'x', 'b', 'y', 'c', 'z'])
    expect(interleave([10, 20, 30, 40], [5, 6, 7, 8])).to.deep.eq([10, 5, 20, 6, 30, 7, 40, 8])
  })
})

describe('makeRange()', () => {
  it('makeRange() method exists', () => { expect(makeRange).to.exist })

  it('when 2nd arg is missing (`fillString`) return empty array', () => {
    expect(makeRange(0)).to.deep.eq([])
  })

  it('when the input is -10, return empty array', () => {
    expect(makeRange(-10, '')).to.deep.eq([])
  })

  it('creates an array of the specified length with the specified initial string', () => {
    expect(makeRange(3, 'a')).to.deep.eq(['a', 'a', 'a'])
    expect(makeRange(5, 'z')).to.deep.eq(['z', 'z', 'z', 'z', 'z'])
  })
})

describe('countByFirstLetter()', () => {
  const input = ['cat', 'kitty', 'catzilla', 'fluffykins']
  const expected = {
    c: 2,
    k: 1,
    f: 1
  }

  it('countByFirstLetter() method exists', () => { expect(countByFirstLetter).to.exist })

  it('when the input is not object, or has no keys, return empty object', () => {
    expect(countByFirstLetter([])).to.deep.eq({})
  })

  it('creates an object to count words by first letter', () => {
    expect(countByFirstLetter(input)).to.deep.eq(expected)
  })
})

describe('groupByFirstLetter()', () => {
  const input = ['cat', 'kitty', 'catzilla', 'fluffykins']
  const expected = {
    c: ['cat', 'catzilla'],
    k: ['kitty'],
    f: ['fluffykins']
  }

  it('groupByFirstLetter() method exists', () => { expect(groupByFirstLetter).to.exist })
  it('when the input array is empty, return empty object', () => expect(groupByFirstLetter([]))
    .to.deep.eq({}))
  it('when the input is non-object, return empty object', () => expect(groupByFirstLetter('nope'))
    .to.deep.eq({}))
  it('when the input is null, return empty object', () => expect(groupByFirstLetter(null))
    .to.deep.eq({}))
  it('creates an object to count words by first letter', () => expect(groupByFirstLetter(input))
    .to.deep.eq(expected))
})
