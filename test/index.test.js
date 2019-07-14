////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
/* eslint-env mocha */
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env
  var lukeSkywalker = require('../data/person-1.json')
  var leiaOrgana = require('../data/person-5.json')
  var obiWanKenobi = require('../data/person-10.json')

  var chai = require('chai')
  var {
    getName,
    getFilmCount,
    getSummary,
    getVehiclesCostInCreditsSumTotal,
    getStarshipPassengerAndCrewSumTotal,
    getCargoCapacityTotal,
    getFastestStarshipName,
    getLargestCargoStarshipModelName,
    getSlowestVehicleOrStarshipName,
    getFirstStarshipName,
    getNthFilm
  } = require('../index.js')
}
var expect = chai.expect

describe('getName()', () => {
  it('expects return value `Luke Skywalker`', () => {
    expect(getName(lukeSkywalker)).to.eq(`Luke Skywalker`)
  })
})

describe('getFilmCount()', () => {
  it('expects return value 5', () => {
    expect(getFilmCount(lukeSkywalker)).to.eq(5)
  })
})

describe('getSummary()', () => {
  it('expects return value `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`', () => {
    expect(getSummary(lukeSkywalker)).to.eq(`Luke Skywalker, 172cm, 77kg. Featured in 5 films.`)
  })
})

describe('getVehiclesCostInCreditsSumTotal()', () => {
  it('expects return numeric value 8000', () => {
    expect(getVehiclesCostInCreditsSumTotal(lukeSkywalker)).to.eq(8000)
  })
})

describe('getStarshipPassengerAndCrewSumTotal()', () => {
  it('expects return numeric value 27', () => {
    expect(getStarshipPassengerAndCrewSumTotal(lukeSkywalker)).to.eq(27)
  })
})

describe('getCargoCapacityTotal()', () => {
  it('expects return value 80124', () => {
    expect(getCargoCapacityTotal(lukeSkywalker)).to.eq(80124)
  })
})

describe('getFastestStarshipName()', () => {
  it('expects return value `X-wing`', () => {
    expect(getFastestStarshipName(lukeSkywalker)).to.eq(`X-wing`)
  })
})

describe('getLargestCargoStarshipModelName()', () => {
  it('expects return value `Lambda-class T-4a shuttle`', () => {
    expect(getLargestCargoStarshipModelName(lukeSkywalker)).to.eq(`Lambda-class T-4a shuttle`)
  })
})

describe('getSlowestVehicleOrStarshipName()', () => {
  it('expects return value `Imperial Speeder Bike`', () => {
    expect(getSlowestVehicleOrStarshipName(lukeSkywalker)).to.eq(`Imperial Speeder Bike`)
  })
})

describe('getFirstStarshipName()', () => {
  it('expects return value `X-wing`', () => {
    expect(getFirstStarshipName(lukeSkywalker)).to.eq(`X-wing`)
  })
})

describe('getNthFilm()', () => {
  it('expects return value `A New Hope`', () => {
    expect(getNthFilm(lukeSkywalker, 1)).to.eq(`A New Hope`)
  })
})
