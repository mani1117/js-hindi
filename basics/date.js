//let mydate = new Date()
//console.log(mydate.toString());  //Sun Dec 01 2024 12:31:29 GMT+0000 (Coordinated Universal Time)
//console.log(mydate.toDateString());  //Sun Dec 01 2024
//console.log(mydate.toLocaleString()); // 12/1/2024, 12:35:09 PM

//console.log(typeof mydate);  // object

//let myCreateDate = new Date(2023, 0 , 23)

//console.log(myCreateDate.toDateString());

//let myCreatedDate = new Date(2023, 0 , 23, 5, 3)
//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2023-01-10")
//console.log(myCreatedDate.toLocaleString());

//let myTimeStamp = Date.now()
//console.log(myTimeStamp);


//let newDate =  new Date()
//console.log(newDate.getDate());
//console.log(newDate.getFullYear());


let date1 = new Date("01/16/2024");
let date2 = new Date("01/26/2024");

// Calculating the time difference
// of two dates
let Difference_In_Time =
    date2.getTime() - date1.getTime();

// Calculating the no. of days between
// two dates
let Difference_In_Days =
    Math.round
        (Difference_In_Time / (1000 * 3600 * 24));

// To display the final no. of days (result)
console.log
    ("Total number of days between dates:\n" +
        date1.toDateString() + " and " +
        date2.toDateString() +
        " is: " + Difference_In_Days + " days");





