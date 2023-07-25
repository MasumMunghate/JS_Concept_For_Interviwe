// Call, apply, and bind are the functions that help us change the context of the this keyword present inside the invoking function.

// What is Call 
// call is a function that we use to change the value of 'this' inside a function
// const obj = {name : "masum"};

// function sayHello(){
//     return "hello" + this.name  // this key is pointing to a global we got nothing (undefined) becouse npop such variable is available in  window obj
// }
// console.log(sayHello());

//we want to accese the obj' name. so call Methode is cames into a picture

// const obj ={name: "Masum"};

// function sayHello(age){
//     return "hello "+ this.name+ " age is " + age; //this key word is pointing to a obj with the help of call methode
// }
// console.log(sayHello.call(obj , 23)); call( methode accept the object that gone we want to access and params of methode);

{/*What is Apply*/}
//Apply works exactlly same as call work but the only differance is that it taks all the argument in the form of Array.


// const obj = {name : "Masum"};

// function sayHello(age , profetion){
//     return "hello " + this.name + " and the age is "+ age +" And The profetion is "+ profetion
// }
// console.log(sayHello.apply(obj , [24 , "Softwere Engineer"]))


{/*What is Bind*/}
// The bind function creates a copy of a function with a new value to the 'this' present inside the calling function.
// it Provided us reusable function 
// It allows you to explicitly set the value of this inside a function when it's called.

// const obj = {name : "Masum"};

// function sayHello(age , profetion){
//     return "hello " + this.name + " and the age is "+ age +" And The profetion is "+ profetion
// }

// const bindfun = sayHello.bind(obj);

// console.log(bindfun(23,"Softwere Engineer" )); // we can resuse the function
// console.log(bindfun(77 , "Youtuber"));

// We can create oure Own Call aplly and bind methode alos called create a Pollyfil of this method

{/*Question asked in Interviwe  */}

// const person = {name : "Masum"};
// function sayHello(age , para){
//     return `${this.name} is ${age} is ${para}`
// }

// console.log(sayHello.call(person , 24 ,"kskas")); //output is :-> Masum is 24 is kskas
// // console.log(sayHello.bind(person , 34)); //output is :-> Whole function Show karega
// // How to fix it 
// const bindFun = sayHello.bind(person); 
// console.log(bindFun(44 , "jasjaki"))// output is :->Masum is 44 is jasjaki

// const age = 10;
//  var person = {
//     name : "piyush", 
//     age : 20,
//     getAge : function(){
//         return this.age
//     }
//  }

//  var person2 ={age : 24};

//  console.log(person.getAge.call(person2));// Output is 24 because call is pointing to a person2 

// var status =" 😂";

// setTimeout ( ()=>{
//     const status = "💕";
    
//     const date = {
//         status : "👀",
//         getStatus(){
//             return this.status;
//         }
//     }
//     console.log(date.getStatus()); //output is :-> "👀" because this key is pointing to a object
//     console.log(date.getStatus.call(this)) //output is :-> " 😂" this key is pointing to a Global because console.log(date.getStatus.call(this)) is inside a

// } , 0);


{/*call printAnimal such that it print all the animal in object */}

// const animal =[
//     {species : "Lion" , name : "King"},
//     {species : "whle" , name : "Queen"}
// ]

// function printAnimal(i){
//     this.print = function(){
//         console.log("#" + i+ " "+ this.species+ ": "+ this.name);
//     }
//     this.print();
// }
// // printAnimal.call(animal) //#undefined undefined: undefined
// // how to fix it

// for(let i=0; i<animal.length; i++){
//     printAnimal.call(animal[i] , i);
// }

{/*Append an array into an another array */}

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// arr1.push.apply(arr1 , arr2);
// console.log(arr1);

//Find the min and max value in an array
//  const arr  = [1,2,3,4,5,6,7,8];
//  console.log(Math.max.apply(null , arr))

// Question

// function f(){
//     console.log(this); // this is Pointing to a window
// }
//  let user  ={
//     g : f.bind(null)
//  };
//   user.g();

{/*Bond Chaining doesnt exist */}
