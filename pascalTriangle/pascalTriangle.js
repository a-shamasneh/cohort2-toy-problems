/*
Pascal triangle is a triangle made with rows of numbers.
The first row is [1]. 
The second row is [1,1].
In all following rows, each number is the sum of the two directly above it.

For example, the pascal triangle with 4 rows is:

        1
      1   1
    1   2   1
  1   3   3   1

or in array form: [[1],[1,1],[1,2,1],[1,3,3,1]];

Read more about Pascal Triangle here:
http://en.wikipedia.org/wiki/Pascal's_triangle

Also, see the animated GIF file in this folder (open it in Chrome)

The task for this exercise is to write a function that given the number of rows, builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/

var buildTriangle = function(numOfRows){
	debugger;
var result=[];
for(var i=0;i<numOfRows;i++){
	var temp=[];
	temp.push(i+1)
	result[i]=temp;
	for(var j=0;j<i+1;j++){// check  which row  we are 
		if(j==0 || j==i){
			result[i][j]=1
		}
		else{
			result[i][j]=result[i-1][j-1]+result[i-1][j]
		}
	}
}
	return result
}
		
