// Wthat is Curring
// 
// Curruing is a function that tacks a one argument at a time and return a function excepting the next argument
//The Converssion of function from callable as f(a , b) into f(a)(b);
//Simpal Exampal of curring

// function f(a , b){
//     console.log(a , b);//The Converssion of function from callable as f(a , b) into f(a)(b);
// }

// function fun (Args){
//     return function(secondArgs){
//         return `${Args} ${secondArgs}`
//     }
// }

// console.log(fun(5)(6));
// console.log(fun(5)(6)()()()()); we do this also depending on how curring deep is

// Why do we used Currying
//1) It makes a function pure which makes it expose to less errors and side effects.
//2) It helps in avoiding the same variable again and again.
//3) It is a checking method that checks if you have all the things before you proceed.
//4) It divides one function into multiple functions so that one handles one set of responsibility.

// Interviwe Question 
// Q1)  sum (2)(6)(1)

// function sum(a){
//     console.log(a);
//     return function b(bb){
//         console.log(bb)
//         return function c(cc){
//             console.log(cc);
//             return a+bb+cc;
//         }
//     }

// }

// console.log(sum(2)(6)(1));

// function func(argu1){
//     return function(argu2){
//         return function(argu3){
//             console.log(argu1+argu2+argu3);
//         }
//     }
// }



// func(1)(2)(3);