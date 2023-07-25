
//this keyWord is refreace somthing like an object
// “This” keyword refers to an object that is executing the current piece of code. 

// Two type of Object Bindin in js
// 1) Implicite Object Binding 
// 2) Explicite Object Binding 

// 1) Implicite Binding  is Applye When we Invock a function in an object using a Dot Notetion

// const calas = {
//     total : 0,
//     add(a) {
//         this.total +=a;  // this keyword in this senario is pointiing to a object(calas) using which function was invock;
//         return this;
//     },
//     substract (a){
//         this.total -=a ;
//         return this;
//     },

// }

// const result  = calas.add(10);

// this.a = 5;// this keyword is pointing to a global object
// console.log(this.a); 
// console.log(this); // we got a global object


// this.a = 10 ;
// function fun(){
//     console.log(this.a); // this keyword is pointiong to a global object
// }
// fun();


// const user = {
//     name :" masum ",
//     age : 24,
//     getDetail(){
//         console.log(this.name); // in this senario this key is pointing to a Object || its targeting a parent object
//         console.log(this); // whole Object
//     }
// }
// user.getDetail();

{/*For a Normal Function */}
// const user = {
//     name :" masum ",
//     age : 24,
//     chaild :{
//         newName : " RoadSide Coder",
//         getDetail(){
//             console.log(this.newName ,"and", this.name); //Rodside coder and Undefine
//             // console.log(this);
//         }
//     }
//     //this.newName  this keyWord is pointing to a imidiate Parent (Jo najdik ka parent ho use point karta hai);
    
// }
// user.chaild.getDetail();

{/*For a Arrow function */}

// let user = {
//     name : "Masum Bhau Munghate",

//     getDetails : () =>{
//         //console.log(this.name); // we got Nothing 
//        // console.log(this); // we got a Window Object its Pointing to a Global Object 
//     }
// }

// user.getDetails();

// in fat arrow Function its ponting to a global object Why?
//it diden't have any parent function which is normal function
// aagar normal function hota or uske andar fat arrow function hota to this key is pointing to a parent object

// const user = {
//     name : "Masum Bhau",
//     getDetails(){
//         const ArrFun = ()=> console.log(this.name);
//        ArrFun();
//     }
// }
// user.getDetails();

{/*How this KeyWord is perform inside a class or a constructor  */}

// class user {
//     constructor(n){
//         this.name = n;
//     }
//     getName (){
//         console.log(this.name); // this keyword is pointing to Everything inside a constructor
//     }
// }

// const User = new user("Masum ");

// User.getName();

{/*Interviwe Question */}
// const user = {
//     Firstname : "Masum",
//     getName(){
//         const Firstname = "Masum Munghate";
//         return this.Firstname;

//     }
// }
// console.log(user.getName())

//=====================================================

// function makeUser(){
//     return{
//         name : "Masum",
//         ref : this
//     }
// }
// let user = makeUser();
// console.log(user.ref.name); // we got nothing here because this over here pointing to a global Object
// console.log(user); // we got whole Object along with ref window 
// how to fix this code that we want to get a name as a Masum

// function makeUser(){
//     return{
//         name : "Masum bhau ",
//         ref (){
//             return this;
//         }
//     }
// }

// let user = makeUser();

// console.log(user.ref().name);

// const user = {
//     name : " Ashish",
//     logMessege(){
//         console.log(this.name);
//     }
// }

// setTimeout(user.logMessege , 1000); // we got nothin bcose setTimeOut use user.logMessege as a call back Function
// how to fix The Abow Problem

// const user = {
//     name : " Ashish",
//     logMessege(){
//         console.log(this.name);
//     }
// }

// setTimeout(function(){
//   user.logMessege();
// } ,1000);

// const user ={
//     name : "Piyush",

//     getName(){
//         return `hello ${this.name}`;
//     },

//     ferewell : () =>{
//         return  `GoodBye ${this.name}`
//     }
// }

// console.log(user.getName());
// console.log(user.ferewell());

{/*Create a object calculator */}

// const calcultor ={
//     read(){
//         this.a = +prompt("a =" , 0)
//         this.b = +prompt("b = " ,0);
//     },

//     sum(){
//         return this.a + this.b
//     },
//     mul(){
//         return this.a* this.b
//     }
// }


// calcultor.read();
// console.log(calcultor.sum());
// console.log(calcultor.mul());


// ye confuction hai thoda

// var length = 4;

// function callback(){
//     console.log(this.length);
// }


// const objects = {
//     length : 5 , 

//     method(fun){
//         fun()  // Why fun() is pointing to a Global 
//     }
// }

// objects.method(callback);

// const calc = {
//     total :0,

//     add(A){
//         this.total = this.total + A;
//         return this;

//     },
//     mul(M){
//         this.total = this.total *M
//         return this;
//     },
//     sub(S){
//         this.total = this.total - S
//         return this;
//     },

// }

// const result = calc.add(10).mul(30).sub(5).add(19);
// console.log(result.total);