//let var And Const 
// Scope

// What is Scope ?
// Ans:- In JavaScript, scope refers to the visibility or accessibility of variables, functions, and objects in some particular part of your code. It determines where these entities are defined and where they can be accessed.


// two type of Scope in js 
//1)  Global Scope: Variables declared outside of any function or block have global scope. They are accessible from anywhere in your code, including inside functions or blocks. Global variables can be accessed and modified throughout your program.

// 2) Local Scope: Variables declared inside a function or block have local scope. They are only accessible within that specific function or block. Local variables are not accessible from outside the function or block where they are defined.  2.1) Local variables are created every time a function is called, and they are destroyed once the function finishes executing. This means that each function call has its own separate scope.

// var a =10; // var has Global Scope it can Acces any where
// console.log(a);

// function a(){
//     // This is a function scope
// }

// {
//     // this is a block Scope
// }

// {
//     var b=8;

// }
// console.log(b); // still  accesbl

// {
//     let b=101; // let accese within this Scope

// }
// console.log(b); //Uncaught ReferenceError: b is not defined 

// {
//     const c = 99;  // same with const
//     console.log(c);
// }

{/*Variable Shadowing*/}

// Imp Note:- Variable shadowing occurs in JavaScript when a variable declared in a local scope has the same name as a variable declared in an outer scope. In such cases, the inner variable "shadows" or takes precedence(priority in importance) over the outer variable within its scope. 
// to avoid Variable showdowing , choose the uniqu or meaningfull variable 

// code :-

// var x = 10; // Outer variable
// function myFunction() {
//   var x = 20; // Inner variable (shadows the outer variable)
//   console.log(x); // Output: 20
// }

// console.log(x); // Output: 10
// myFunction();

{/* Illegal Variable Shadowing */}

// We can Shoadowing var variable by using let, But We can not Shoadowing let variable by using var
// function test (){
//     var a ="hello";
//     let b = "Goodboy";

//     if(true){
//         let a= "hii";
//         var b= "Masum"
        
//         console.log(a);
//         console.log(b);
//     }
// }

{/*Decleration */}

// var a =10;
// var a =70; // it Update the value  We Can re-deCleared It as many as we want
// console.log(a);

// let c = 10;
// //  let c =30;  // It Show us Error That B is Alredy Define We Can no redeCleared by using var
//  c=50;  // Its Work
// console.log(c); 

// Let and const Can not re-Decleared in tha same Scope But We Can redeCleared In Out Side Of The Scope 

// let a= 10;
// {
//     let a =100;
// }
// console.log(a);


//Exicution Context Ke Liye Samjana hai
// let a =10;
// function b(x){
//     return x*10;
// }
// let bb = b(a);

// console.log(bb);


{/* JavaSript Hoisting*/}

// console.log(a); // it give us undefine
// var a = 10;

// JavaSCript Look code like This , Exampal of Hoisting
// var b;
// console.log(b); 
// b =20;
