/* Stack Example */ 

let varOne = "Mani"
let varTwo = varOne

varTwo = "Manu"
//console.log(varOne);
//console.log(varTwo);

//Heap Example

let userOne = {
    name:"Mani",
    city:"pta"
}

let userTwo = userOne

userTwo.name = "Manu"
console.log(userOne.name);
console.log(userTwo.name);