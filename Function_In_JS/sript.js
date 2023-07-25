 // function are first class object
//function decleration or Statmen defination

// function fun(){

// }

// Function Expression
// const Squar = function(num){
//     return   
// }

{/*First Class Function */}
{/* the ability to treat functions as values, to pass them as arguments and to return a function from another function then it is said that  programming language has First Class Functions and the functions are called as First Class Citizens in that programming language. */}

// The first class functions are the first class citizens
// Functions can be stored in variables, objects, or arrays.
// Functions can be passed as arguments or can be returned by another function. 

// function square(num){
//     return num*num
// }

// function displaySquare(fun){
//     console.log("Square is " +fun(5));
// }
// displaySquare(square);


{/*What is IIFE */}// Immediately Invoked Function Expression
// Normally We Can write a Function like this
// function funName (x){
//     console.log(x*x);
// }

// funName(5)

// but in IIFE we can Wrap into a Paranthesis and it still call the function
// (function sum(argu){
//     console.log(argu*argu);
// }) (10)

// why we use IIFE 
// Encapsulation: IIFE helps create a private scope for your variables and functions, preventing them from polluting the global namespace. 
// Data Privacy: By encapsulating variables and functions within an IIFE, you can keep sensitive data or implementation details private. 
//----------------------------------------------------------------------------//

{/*Function Scope */}

// var num1 = 10,
// num2 =20,
// name ="Masum Munghate";

// function multiply(){

//     return num1*num2
// }

// console.log(multiply()); // it return 200 Becose num1 And num2 are define in Global Scope

// function getStore(){
//     var num1 =2,
//     num2 = 3;

//     function add(){
//         return name + " score is " +(num1 + num2);
//     }

//     return add();
// }

// console.log(getStore());
//-------------------------------------------------------------//

// for(var i=0; i<5; i++){  //
//     setTimeout(function(){
//         console.log(i)
//     } , i*1000);
// } // it give us The Output 5 5 5 5 5  Becouse Var Doent have Block Scop 

// for(let i=0; i < 5 ; i++){  // Every Time For Loop run it create another Block Scope for the function
//     setTimeout(function () {
//         console.log(i);
//     } , i*1000); 
// } // It Give us 0, 1,2,3,4
//-------------------------------------------------------------//

// var x= 20;
// var fun  = function (){
//     console.log(x);
//     var x=21;
// }

// fun(); // We got the Answer as Undefine 

// function fun (){
//     console.log(arguments);
// }

// fun(1,2,3,4)

// const funt = (arguments,arguments2,arguments3,arguments4 ) =>{
//     console.log(arguments,arguments2,arguments3,arguments4 );
// }

// funt(1,2,3,4)

// // Differance between Noemal function and arrow function
// when we call the normal function it reffer to the current Object 
// but when we call the Arrow function it reffet to a window object

// what is callback function in javascript?
// a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// what is higher order function in javascript?
// functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

// What is first class function?
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// ===================================================================================================

// JS by Akshash Sani 
// function invocation and variable envorment 


var x = 1;
a();
b();
console.log(x);

function a (){
    var x = 10;
    console.log(x);
}

function b (){
    var x = 100;
    console.log(x);
}