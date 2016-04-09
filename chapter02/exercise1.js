/*
 * Looping a triangle
 *
 * Write a loop that makes seven calls to console.log to output the following triangle:
 *
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 *
 * It may be useful to know that you can find the length of a string by writing .length after it.
 */

for (var pound="#"; pound.length <= 7; pound +="#")
{
	console.log(pound);
}
