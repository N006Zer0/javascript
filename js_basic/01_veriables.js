/*
In javascript having 2 types of veriables 1st is "const" and 2nd is known as "let" or "var"

const veriable is not changable

we not not var for represnt as variable define becouse it have conflict with scope "{}"" yes
these curly barckets are called as a scope its used in many loop or others codes

so the another option is 

let - we use this for declare a veriable which can chnageable every time if you want.

you also generate veriable without using let

In javascript we dont need to write ';' in the end of code line its optional
but i suggest you to use it for batter programming.

*/

const yourAccountId = 0001
let yourName = "Ashish Chaturvedi";
var yourCity = "Delhi";
zipCode = "110001"

// yourAccountId = 0002  //const so not change


console.log(yourAccountId);
console.log(yourName);
console.log(yourCity);
console.log(zipCode);

// now we change variable value 

yourCity = "Haryana";

/* Above we not used let because we alredy declared if we again use let command we get error 
SyntaxError: Identifier 'yourCity' has already been declared
*/
zipCode = "000010"
// it is very long process to get information using again and again console.log() command so we use

//console.table([]) command



console.table([yourAccountId,yourCity,yourName]);
