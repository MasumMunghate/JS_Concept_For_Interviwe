
{/*What is Lexical Scop */}

//A Variable Define in OutSide a function can be acceseble in inside a another fuction define after a variable decleration But The Opposite not a true 
//Exampal

// let username = "Masum Munghate "

// function lexical(){
//     console.log(username);
// }
// lexical();



// function lexical1(){

//     var username = "Masum Munghate"

// }
// console.log(username); // we face the error username is not defined
// lexical1();

//Golble Scope
// function Closur(){
//     var name = 'Masum munghate'
//         // Outer Scope
//     function displayName(){
//         //Inner Scope
//         alert(name);
//     }
//     displayName()
// }
// Closur();

{/*What Is Closures is */}

//Exapla of Clouser
//Golble Scope
// function Closur(){
//     var name = 'Masum munghate'
//         // Outer Scope
//     function displayName(){
//         //Inner Scope
//         alert(name);
//     }
//     return displayName()
// }
// var MyFun = Closur();

// Use Of Clouse
//1) It is Possible for a function to have a pravet variable
//2) Time Optimizetion

// function makeFun(){
//     var name = "Masum Munghate";

//     function displayName(){
//         console.log(name);
//     }

//     return displayName();
// }

// var Myfun = makeFun();
// console.log(Myfun)


// Global Scope
// function makeFun(){
//     var name = "Masum Munghate";
        //Outer Scope
//     function displayName(num){
            // Local Scope
//         console.log(name , num);
//     }

//     return displayName();
// }

//  makeFun()(5)  // we can calling the display funtion and return the display funtion

{/*Clouser Scope Chain */}
//Closer Have 3 Scope 1) Local Scope 2)Outer Scope 3)Global Scope
// Close Give us Acces the Paraent Scope as well as Parents Parent Scope

// var useName = "Masum";

// function makeFun(){
//     var x=10;
//     function displayName(){
//         console.log(x , useName);
//     }
//     return displayName();
// }
// makeFun();

{/*Interviwe Based Question */}

// var count =0;

// (
//     function printCount(){
//         if(count === 0){
//             let count =1;
//             console.log(count); // Output is 1
//         }
//         console.log(count); // outputr is 0;
//     }
// )();

// //Question 2)
// function creteBased(num){
//     return function (number){
//         console.log(num + number)
//     }
// }
  
// // Write a function to allow to do this
// var addSix = creteBased(6)
// addSix(10);
// addSix(21)

// Question 2) print 1 2 3 with var Variable

// for(var i=0; i<3 ; i++){
//     function inner(i){
//         setTimeout(function log(){
//             console.log(i)
//         } , i*1000);
//     }
//     inner(i);
// }

{/*Use a Closer To a privet counter */}

{/*What is Modular Pattern */}

// it is a commonly used Design Pattern which is used to wrap a set of variables and functions together in a single scope.


//Q) Make this Run Only Ones

// let viwe;
// function runFun(){
//     let counter = 0; // privet variable

//     return function (){
//         if(counter > 0){
//             console.log("Function Are Alredy Run")
//         }else{
//             viwe = "Masum munghate";
//             console.log("SubCribe to" , viwe);
//             counter++;
//         }
//     };
         
// }
// let isrunFun = runFun();
// isrunFun()
// isrunFun()
// isrunFun()
// isrunFun()

{/*Implementation Caching / Memoize Function */}

//Memoizetion means Apne Pass Koi code Likha Hai Vo code First time cala Or Result apne ko mila To Vo Result apn Kahi cache mai Store krna padhta hai taki time consuption kam ho kahi memory mai store krlo
 
//Defination :-  Memoizetion is technique that can be used to reduce time consuming calculation by saving previus input to something  called cache and  return the result from it
//{5:15, 6:36} iss tarse se store krna hai
// Problem Statament
// Exampal
let sum =0;
const cals = (N) =>{
        for (let i = 0; i <= N; i++ ){
                sum = sum +i;
        }
        return sum;
}

const memoize = (fun) =>{
        let cache ={}
        return function (...agrs){
                let n = agrs[0];  // pass ki hui value yaha aa yayegi

                if(n in cache){
                        console.log("Cahce se uthaya gaya hai");
                        return cache[n];
                }else{
                        console.log("1st time cala");
                        let result = fun(n)
                        cache[n]= result;
                        return result; 
                }

        }


}
console.time();
const optimeze = memoize(cals);
console.log(optimeze(5));
console.timeEnd();

console.time();
console.log(optimeze(5));
console.timeEnd();

