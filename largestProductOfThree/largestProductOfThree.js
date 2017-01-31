/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	array=array.sort();

	 if(array.length>=3){
	 	var result=array[array.length-1];
	  result=result*array[array.length-2]*array[array.length-3]
	 	return Math.abs(result);
	 }
	 else{
	 	var result=array[0];
	 	for(var i=0;i<array.length;i++){
		
			if(array[i]<0){

			result=result*array[i]*-1
		}
		else{
			result=result*array[i]
		}
		
		
	}
	return result;

	 }
	
};




