//arrays

// [] - square brackets
// () - parentheses
// {} - curly braces

let myArr = [1,2,3,4,5];
//myArr.push(6);
//myArr.pop();
//myArr.unshift(9); /*[
    9, 1, 2, 3,
    4, 5, 6
  //] */
// myArr.shift();


//console.log(myArr.includes(2))
//console.log(myArr.indexOf(3));

console.log("A ", myArr);

const myarr1 = myArr.splice(1, 4);
console.log("splice ", myarr1);
console.log("org ", myArr);