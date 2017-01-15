/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/

function flatten(){
var args=Array.from(arguments);
var result=[];
for(var i=0;i<args.length;i++){
	if(typeof(args[i])=="object"){
	if(Array.isArray(args[i])){
		for(var j=0;j<args[i].length;j++){
			if(typeof(args[i][j])=="object"){
				for(var k=0;k<args[i][j].length;k++){
					result.push(args[i][j][k])
					}
				}else{result.push(args[i][j])}
			}
		}
	}
	else{
		result.push(args[i])
	}
	if(JSON.stringify(args[i])==="null"){
		result.push(null)
	}
}
return result;
}
