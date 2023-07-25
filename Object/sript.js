//Object
//  const user = {
//     name : "Masum Munghate",
//     age : 24,
//     Elementa : "fuf",
//     "property like this" : true  // key is "property like this"  and Value is true
//  }

 //console.log(user); // To print the Whole Object

//  user.name = "Rakshita Lihitkar"; // Update the property of perticular Value
//  console.log(user);

//  delete user.Elementa // Delet the Value Of Object
//  console.log(user);
 
//  console.log(user["property like this"]); // we can log the property like this

//  delete user["property like this"];
//  console.log(user);

 // InterViwe Based Question
//  const fun = (function(a){
//     delete a;
//     return a;
//  }) (5)
 // a is Local Variable and and delet Key word delet the property of an object
 //console.log(fun); // output is 5

 // InterViwe Based Question
 // How do add Dyanmic key value pairs to an object




 {/*Loop on Object */}
//  const user = {
//    name : "Masum Munghate",
//    age : 24,
//    Elementa : "fuf",

//    "property like this" : true  
// }

// for( key in user){
//    console.log(key); // we got a key in object
// }

// for( key in user){
//    console.log(user[key]); we got value in onject
// }

{/*Interviwe Question */}

//Q) What is Output
 
// const obj = {
//    a : "one", // "One will be Replace by "Three"
//    b : "two",
//    a : " three" // object dont accept same key , last one is updated value
// }
     
// console.log(obj);

//Q) Create a function multipy_by_two that multipy all the numeric property value of num by 3

// let nums = {
//    a : 100,
//    b : 200,
//    c : "masum"
// }

// function multipy_by_two(obj){
//    for( key in obj){
//       if(typeof obj[key] === "number"){
//          obj[key] = obj[key] *3;
//       }
//    }
// }
// multipy_by_two(num);
// console.log(num);

//Q) What is JSON.Stringfy and JSON.parse? 
// JSON.Stringfy :- Convert the object into String

// let num = {
//       a : 100,
//       b : 200,
//       c : "masum"
//    }

//     console.log(JSON.stringify(num)); // Convert the object keys into String
//    // And we want to conver back into the Object use JSON.parse.
//    let strObj = JSON.stringify(num);
//    console.log(JSON.parse(strObj));
//    // Comman use of JSON.Stringfy and JSON.parse.
//    //Storing it in an local storege

//Q) What is the outpu  

// console.log([..."Masum"]); // it converted into a array of char

//Q) What is the outpu 

// const user = {name : "masum", age : 21};
// const admin = {admin : true , ...user};

// console.log(admin);

//Q) What is Destructuring in Object ? 
// taking out a perticular property 

// let user = {
//    name : "Masum",
//    age : 23
// }
// const name  = "RodeSide Coder"; // Rename the Destructured Value

// const { name:myName , age} = user

// console.log(name , age);

// let user = {
//    name : "Masum",
//    age : 23,
//    fullName : {
//       firstName : "Ashish",
//       secondName : "Sondarkar"
//    }
// }
// const {fullName: {firstName}} = user
// console.log(firstName);