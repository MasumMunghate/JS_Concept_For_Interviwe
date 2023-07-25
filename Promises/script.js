// https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/ 

// Synchronus in js 
// it run a code line by line it Does not wait anyone it run a code from top to bottom event if we change the line ogf code

// console.log("I")
// console.log("Eat ")
// console.log( " ice cream ")
// console.log( "with a ")
// console.log( "Spoon ")

{/*Asynchonus In js  */}
// with =the help of setTimeout we can Achive the Asynchronus In js

// console.log("I")
// console.log("Eat ")
// // after the 4sec it will run
// setTimeout( ()=>{
//  console.log( " ice cream ") 
//  }, 4000)
// console.log( "with a ")
// console.log( "Spoon ")

{/*What is CallBack */}
//  Calling a function inside a another function is called Call back Function in simpal word it connection between two function 
// Why do we use callbacks?
// When doing a complex task, we break that task down into smaller steps. To help us establish a relationship between these steps according to time (optional) and order, we use callbacks.

// function one(calla){
//     calla();
//     console.log("Stap 1")
    
// }

// function two(){
//     console.log("stap 2")
// }


// one(two);
// ===========================================================================================

//  Promises 

// promises :- A promises is a object that may a produce a single value some time in a future either a resolved value or a resone that its not a resolved.

const meetingFriend = new Promise( (resolve , reject)=>{
    meeting = true;
    if(meeting){
        resolve("yaa you have to meet your friend")
    }else {
        reject("You didnt keep your promis")
    }
});
meetingFriend.then((data)=>{
    console.log("thanku for meeting "+ data);
}).catch((nodata)=>{
    console.log("you did not come "+nodata)
});

// 2nd Example

// const colourcode = new Promise((resolve , rejected)=>{
//        setTimeout(()=>{
//         const color = ["red", "yellow" , "green"];
//         resolve(color);
//         rejected("error while displying colour");

//        },3000);
// });

// colourcode.then((data1)=>{
//     console.log("your color is "+data1);
// }).then((data)=>{
//     console.log("Error"+data);
// })
