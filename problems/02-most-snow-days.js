/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `citiesWithMostSnowDays` Which cities have the most snow days?

Write a function, `citiesWithMostSnowDays` that returns an array of objects,
that includes data on the cities that have the highest number of snow days
across all months.

For example, if the maximum number of snow days across all months is 10, and two
cities have 10 snow days each, the returned array would look like:

[
    { "city": "City Name 1, Country Name", "totalSnowDays": 10 },
    { "city": "City Name 2, Country Name", "totalSnowDays": 10 },
]

Note: You can solve this in multiple ways. Try using a few advanced array
methods!
*/

// function to interate through each object
// return the number of snow days for each object
// if snowdays > snowdays of previous object, replace

const citiesWithMostSnowDays = (climateData) => {
    let mostSnowDays = []
    let mostDays = 0;

    for (let cityObj of climateData){
        if (snowDaySum(cityObj) > mostDays){
            mostDays = snowDaySum(cityObj);
            mostSnowDays = [{"city": `${cityObj.city}, ${cityObj.country}`, "totalSnowDays": mostDays}];
        } else if (snowDaySum(cityObj) === mostDays){
            mostSnowDays.push({"city": `${cityObj.city}, ${cityObj.country}`, "totalSnowDays": mostDays});
        }
    }
    return mostSnowDays;
}

const snowDaySum = (cityObject) => {
    let sum = 0;
    let monthlyAvg = cityObject.monthlyAvg
    monthlyAvg.forEach((ele) => sum += ele.snowDays)
    return sum;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ citiesWithMostSnowDays ];
