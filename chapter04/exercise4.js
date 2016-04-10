/*
 * Deep comparison
 *
 * The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.
 *
 * Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
 *
 * To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
 */

function aInB(a,b)
//Returns true if all a's properties exist in b
{
	for (var item in a)
	{
		if (! item in b)
		{
			return false;
		}
	}
	return true;
}

function bInA(a,b)
//Returns true if all of b's properties exist in a
{
	for (var item in b)
	{
		if (! item in a)
		{
			return false;
		}
	}
	return true;
}

function deepEqual(a,b)
//Performs a deep comparison
{	
	//Check if both a and b are not null and both are type objects
	if (( a && typeof(a) == "object") && ( b && typeof(b) == "object"))
	{
		if (aInB(a,b) && bInA(a,b))
		{
			for (var item in a )
			{
				if (! deepEqual(a[item], b[item]))
				{
					return false;
				}
				return true;
			}
		}
		else
		//a and b don't have the same properties
		{
			return false;
		}
	}
	return a === b;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, null));
// -> false
