/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `leastRainfall` Which cities have the least rainfall in a given month?

Write a function, `leastRainfall` that takes in the climate data and a month,
and returns an array of cities that have the least rainfall in that month. It
should include all cities that recieve less than 10 mm rainfall in that month.

For example, if there are three cities have less than 10 mm, the returned array
should look like:

[ "city1, country1: x mm", "city2, country2: x mm", "city3, country3: x mm" ]
(Each city's data is a formatted string data type).

Note: You can solve this in multiple ways. Try using a few advanced array
methods!

Hint: How can you identify and access the correct data for a month such as
"March"?
*/

const leastRainfall = (climateData, month) => {
    let least = [];
    let monthsIndex = ["January", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].indexOf(month)

    climateData.forEach((ele) => {
        if (ele.monthlyAvg[monthsIndex].rainfall < 10){
            least.push(`${ele.city}, ${ele.country}: ${Math.trunc(ele.monthlyAvg[monthsIndex].rainfall)} mm`)
        }
    })
    return least;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ leastRainfall ];
