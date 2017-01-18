/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
var number= Math.pow(2, num).toString().split('');

var result=0;
for(var i=0;i<number.length;i++){
	var num=parseInt(number[i])
result+=num
}
return result;
}

/// this solution is working for small number 