/*
 * Historical life expectancy
 *
 * When we looked up all the people in our data set that lived more than 90 years,
 * only the latest generation in the data came out. Let’s take a closer look at
 * that phenomenon.
 * Compute and output the average age of the people in the ancestry data set per 
 * century. A person is assigned to a century by taking their year of death, 
 * dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
 * For bonus points, write a function groupBy that abstracts the grouping 
 * operation. It should accept as arguments an array and a function that computes 
 * the group for an element in the array and returns an object that maps group 
 * names to arrays of group members.
 */

var ancestry = JSON.parse(require("./ancestry.js"));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, groupFunction){
	var groups = {};
	array.forEach(function(item){
		groupName = groupFunction(item);
		if (groupName in groups) {
			groups[groupName].push(item);
		}
		else {
			groups[groupName] = [item];
		}
	});
	return groups;
}

var byCentury = groupBy(ancestry, function(person){
	return Math.ceil(person.died / 100); } );

for (century in byCentury)
{
	var ages = byCentury[century].map(function(person){
		return (person.died -person.born)});
	console.log(century + " : " + average(ages));
}
