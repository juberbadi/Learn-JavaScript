var countires = ["India", "USA", "Japan", "Russia", "UAE"];

var state = new Array("Gujarat", "Punjab", "Delhi", "Rajasthan");

console.log(state); //print Array
console.log(state[1]);  //print particular one value of Array
console.log(state.length);  //length of Array
state.pop();    //Delete a last value of Array
console.log(state); 
state.unshift("Rajasthan"); //add value in First Position(0th index)
console.log(state);
state.shift();  //Delete value in First Position(0th index)
console.log(state);
console.log(state.indexOf("Gujarat")); //Find a Index of a value