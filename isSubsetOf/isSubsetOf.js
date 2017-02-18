/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
<<<<<<< HEAD
for(var i=0;i<this.length;i++){
	if(typeof(this[i])=="objcet"){
		return this[i].isSubsetOf(arr)
	}
	
	return arr.indexOf(this[i])>=0
  }

}
// var arrayOfChildrenNames = ["Amir Rahnama", "Mahshid Rahnama"];
// var arrayOfFamilyMemberNames = ["Davood Rahnama", "Maryam Toloo", "Amir Rahnama", "Mahshid Rahnama"];
 
// var isarrayOfNamesSubsetOfFamily = arrayOfChildrenNames.every(function(val) { return arrayOfFamilyMemberNames.indexOf(val) >= 0; }));
// console.log(isarrayOfNamesSubsetOfFamily); // true
=======

}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
