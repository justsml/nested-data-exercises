/*
> 🚀 Before you begin:
> Review the shape of the sample data in README.md: https://github.com/justsml/nested-data-exercises#data

// Then, complete the functions below!


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
*/
function getName (character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name
}

/**
 * ### Challenge `getFilmCount`
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount (character) {
  // TODO: Add your code inside the functions (others below)
  return character.films.length
}

/**
 * ### Challenge `getFirstStarshipName`
 * @instructions
 * Return first starship's name from `starships` property.
 * If length is < 0. Return 'none'
*/
function getFirstStarshipName (character) {
  if (character.starships.length === 0) return 'none'
  return character.starships[0].name
}

/**
 * ### Challenge `getSummary`
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary (character) {
  return `${character.name}, ${character.height}cm, ${character.mass}kg. Featured in ${character.films.length} films.`
}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
*/
function getVehiclesCostInCreditsSumTotal (character) {
  return character.vehicles.reduce((total, v) => {
    return v.cost_in_credits + total
  }, 0)
}

/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * @instructions
 * Sum the number of crew and passenger spots in both vehicles and starships.
 *
 * Sample data expected output: 27
*/
function getStarshipPassengerAndCrewSumTotal (character) {
  return character.starships.reduce((total, s) => {
    return s.crew + s.passengers + total
  }, 0)
}

/**
 * ### Challenge `getNthFilm`
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: N starts at 1, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
*/
function getNthFilm (character, filmNumber) {
  if (filmNumber < 1 || filmNumber > 3) throw new Error(`There are only 3 Star Wars movies, #1-3. Flan fiction excluded.`)
  let filmIndex = filmNumber - 1
  return character.films[filmIndex]
}

/**
 * ### Challenge `getCargoCapacityTotal`
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 *
 * Sample data expected output: 80124
*/
function getCargoCapacityTotal (character) {
  const starshipCargo = character.starships.reduce((total, s) => {
    return s.cargo_capacity == null ? total : total + parseInt(s.cargo_capacity, null)
  }, 0)
  const vehicleCargo = character.vehicles.reduce((total, v) => {
    return v.cargo_capacity == null ? total : total + parseInt(v.cargo_capacity, null)
  }, 0)

  return starshipCargo + vehicleCargo
}

/**
 * ### Challenge `getFastestStarshipName`
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 *
 * Sample data expected output: `X-wing`
*/
function getFastestStarshipName (character) {
  const sortedShips = [...character.starships].sort((a, b) => {
    if (parseInt(a.max_atmosphering_speed, null) === parseInt(b.max_atmosphering_speed, null)) return 0
    return parseInt(a.max_atmosphering_speed, null) < parseInt(b.max_atmosphering_speed, null) ? 1 : -1
  })
  return sortedShips.length > 0 ? sortedShips[0].name : `none`
}

/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
*/
function getLargestCargoStarshipModelName (character) {
  const sortedShips = [...character.starships].sort((a, b) => {
    if (parseInt(a.cargo_capacity, null) === parseInt(b.cargo_capacity, null)) return 0
    return parseInt(a.cargo_capacity, null) < parseInt(b.cargo_capacity, null) ? 1 : -1
  })
  return sortedShips.length > 0 ? sortedShips[0].model : `none`
}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 * @instructions
 * Find the slowest vehicle OR starship. Return its name.
 *
*/
function getSlowestVehicleOrStarshipName (character) {
  const sortedShips = [...character.starships, ...character.vehicles]
  .sort((a, b) => {
    if (parseInt(a.cargo_capacity, null) === parseInt(b.cargo_capacity, null)) return 0
    return parseInt(a.cargo_capacity, null) > parseInt(b.cargo_capacity, null) ? 1 : -1
  })
  return sortedShips.length > 0 ? sortedShips[0].name : `none`

}





/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (getName) { module.exports.getName = getName }
  if (getFilmCount) { module.exports.getFilmCount = getFilmCount }
  if (getFirstStarshipName) { module.exports.getFirstStarshipName = getFirstStarshipName }
  if (getSummary) { module.exports.getSummary = getSummary }
  if (getVehiclesCostInCreditsSumTotal) { module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal }
  if (getStarshipPassengerAndCrewSumTotal) { module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal }
  if (getNthFilm) { module.exports.getNthFilm = getNthFilm }
  if (getCargoCapacityTotal) { module.exports.getCargoCapacityTotal = getCargoCapacityTotal }
  if (getFastestStarshipName) { module.exports.getFastestStarshipName = getFastestStarshipName }
  if (getLargestCargoStarshipModelName) { module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName }
  if (getSlowestVehicleOrStarshipName) { module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName }
}
