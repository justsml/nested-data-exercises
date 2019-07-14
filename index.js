/*

SCROLL TO END OF COMMENTS TO START CODING

> Before you begin, review test data below:

```js
// Sample data - credit: SWAPI.co (yes 🤓 purists, it's a bit out of date. Not the objective.)
{
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "Tatooine",
	"films": [
		"A New Hope",
		"The Empire Strikes Back",
		"Return of the Jedi",
		"Revenge of the Sith",
		"The Force Awakens"
	],
	"species": [
		"Human"
	],
	"vehicles": [
		{
      "name": "Snowspeeder",
      "model": "t-47 airspeeder",
      "manufacturer": "Incom corporation",
      "cost_in_credits": null,
      "length": "4.5",
      "max_atmosphering_speed": "650",
      "crew": 2,
      "passengers": 0,
      "cargo_capacity": "10"
    },
		{
      "name": "Imperial Speeder Bike",
      "model": "74-Z speeder bike",
      "manufacturer": "Aratech Repulsor Company",
      "cost_in_credits": "8000",
      "length": "3",
      "max_atmosphering_speed": "360",
      "crew": 1,
      "passengers": 1,
      "cargo_capacity": "4"
    }
	],
	"starships": [
		{
      "name": "X-wing",
      "model": "T-65 X-wing",
      "manufacturer": "Incom Corporation",
      "cost_in_credits": 149999,
      "length": "12.5",
      "max_atmosphering_speed": "1050",
      "crew": 1,
      "passengers": 0,
      "cargo_capacity": "110",
      "consumables": "1 week",
      "hyperdrive_rating": "1.0",
      "MGLT": "100",
      "starship_class": "Starfighter"
    },
    {
      "name": "Imperial shuttle",
      "model": "Lambda-class T-4a shuttle",
      "manufacturer": "Sienar Fleet Systems",
      "cost_in_credits": 240000,
      "length": "20",
      "max_atmosphering_speed": "850",
      "crew": 6,
      "passengers": 20,
      "cargo_capacity": "80000",
      "consumables": "2 months",
      "hyperdrive_rating": "1.0",
      "MGLT": "50",
      "starship_class": "Armed government transport"
    }
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.co/api/people/1/"
}
```
*/

/**
 * ### Challenge `getName`
 * @instructions
 * Must return input object's `name` property.
 *
 * Input Sample: "Person" object (see #Data README section)
 * Output Example: `Luke Skywalker`
*/
function getName(character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name
}

/**
 * ### Challenge `getFilmCount`
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Input Sample: "Person" object (see #Data README section)
 * Output Example: 5
 */
function getFilmCount(character) {
  // TODO: Add your code inside the functions (others below)

}

/**
 * ### Challenge `getSummary`
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {weight}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {

}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data example output: 8000
*/
function getVehiclesCostInCreditsSumTotal(character) {

}

/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * @instructions
 * Sum the number of crew and passenger seats in both vehicles and starships.
 *
 * Sample data example output: 27
*/
function getStarshipPassengerAndCrewSumTotal(character) {

}

/**
 * ### Challenge `getCargoCapacityTotal`
 * @instructions
 * Sum the total cargo capacity for all vehicles and starships.
 *
 * Sample data example output: 80124
*/
function getCargoCapacityTotal(character) {

}

/**
 * ### Challenge `getFastestStarshipName`
 * @instructions
 *
 * Input Sample: "Person" object (see #Data README section)
 * Output Example: `X-wing`
*/
function getFastestStarshipName(character) {

}

/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * @instructions
 *
 * Input Sample: "Person" object (see #Data README section)
 * Output Example: `Lambda-class T-4a shuttle`
*/
function getLargestCargoStarshipModelName(character) {

}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 * @instructions
 *
 * Input Sample: "Person" object (see #Data README section)
 * Output Example: `Imperial Speeder Bike`
*/
function getSlowestVehicleOrStarshipName(character) {

}

/**
 * ### Challenge `getFirstStarshipName`
 * @instructions
 *
 * Input Sample: "Person" object (see #Data README section)
 * Output Example: `X-wing`
*/
function getFirstStarshipName(character) {

}

/**
 * ### Challenge `getNthFilm`
 * @instructions
 *
 * Input Sample: "Person" object (see #Data README section)
 * Output Example: 1 -> `A New Hope`
*/
function getNthFilm(character, filmNumber) {

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
  if (getSummary) { module.exports.getSummary = getSummary }
  if (getVehiclesCostInCreditsSumTotal) { module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal }
  if (getStarshipPassengerAndCrewSumTotal) { module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal }
  if (getCargoCapacityTotal) { module.exports.getCargoCapacityTotal = getCargoCapacityTotal }
  if (getFastestStarshipName) { module.exports.getFastestStarshipName = getFastestStarshipName }
  if (getLargestCargoStarshipModelName) { module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName }
  if (getSlowestVehicleOrStarshipName) { module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName }
  if (getFirstStarshipName) { module.exports.getFirstStarshipName = getFirstStarshipName }
  if (getNthFilm) { module.exports.getNthFilm = getNthFilm }
}
