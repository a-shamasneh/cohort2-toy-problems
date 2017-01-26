/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
	 // debugger;
	var mid=array.length-1/2;
	if(mid%2!==0){
		mid=Math.floor(array.length-1)*0.5
	
	}
	if(array[mid]>target){
		for(var right=0;right<mid;right++){
			if(array[right]==target){
				return right;
			}
		}
	
	}
	else{
		for(var left=mid*2;left>=mid;left--){
			if(array[left]==target){
				return left
			}
		}
		
	}
	
};

