/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var arr=[];
	var exer1=matrix.slice(1);
	for(var i=0;i<matrix[0].length;i++){
		arr.push(matrix[0][i])
		};
		for(var j=0;j<exer1.length;j++){
			var y=exer1[j].length-1
			//console.log(y);
			if(j!==exer1.length){
				arr.push(exer1[j][y])
			}
			else{
				for(var s=exer1.length-1;s>=0;s--){
					var x=exer1[s].length;
					arr.push(exer1[s][x-1])
					x--;
				}
			}
			
		}
		return arr;
	

};