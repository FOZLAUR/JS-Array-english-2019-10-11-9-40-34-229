// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];

if(typeof(a) == 'object'){
	window.alert("That is an array");
}
else window.alert("That is not an array");


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
for(var i=0; i<a.length; i++)
{
	a[i] *= 2;
}
window.alert(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
var input = 1;
var sep = "";
var results = "";

switch(input){
	case 1: sep = " "; break;
	case 2: sep = "+"; break;
	case 3: sep = ","; break;
	default: sep = "";
}

for (var i=0; i<colors.length; i++){
	results += colors[i];
	if (i < colors.length - 1){
		results += sep;
	}
}

window.alert(results);
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
var result = a;

//TODO should output: [10,8,5,4,1]
for (var j=0; j<a.length; j++){
	for(var k=j+1; k<a.length; k++){
		if(result[j] < result[k]){
			result[j] = result[j] + result[k];
			result[k] = result[j] - result[k];
			result[j] = result[j] - result[k];
		}
	}
}

window.alert(result);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var aCopy = a;
var num = new Array();
var gIndex = 0;

for (var i=0; i<aCopy.length; i++){
	num.push(1);
	var j=i+1;
	while(j<aCopy.length){
		if(aCopy[j] == aCopy[i]){
			num[i]++;
			aCopy.splice(j,1);
		} else {
			j++;
		}
	}
}

for (var j=0; j<num.length; j++){
	if(num[gIndex] < num[j]){
		gIndex = j;
	}
}

window.alert(aCopy[gIndex]);