//map , filter , reduce


// What is Map Function

// const arr= [1,2,3,4,5,6,7];

// var b = arr.map(function(cuurentElement , index , Actual_Array){
        
//     return cuurentElement*2 +index;
// })

// console.log(b);

{/*Filter Function */}

// What is Filter Function
//Filter Function Takse Each Element An array and it applie some Condition Statment against it if The Condition return true the element get pushed into a output array.
// Filtrt return Those elemnt from the array which fulfil the provoided criteria

// const arr= [1,2,3,4,5,6,7];

// const moreThanTwo = arr.filter((cuurentElement , index , Actual_Array )=>{
//         return cuurentElement > 5;
// })

// console.log(moreThanTwo);


{/*Reduce Function */}

// What is Reduce Function?
// It conver the Array Into a singal Value

// const arr= [1,2,3,4,5,6,7];

// const sum = arr.reduce(( Accumulator , cuurentElement,index, Actual_Array)=>{
//             return cuurentElement+Accumulator
// } , 0)

// console.log(sum);

{/*Map Reduce and Filter And Thire Polifills */}

//What is Polyfill? 
//It is the pice of code used to provide modern functionllity on older browser that do not nativly support it

// Array.prototype.myarr = function(cb){
//     let temp =[];
//     for(let i=0; i<this.length; i++){
//         temp.push(cb(this[i] , i , this));
//     }
//     return temp;
// }

// const arr2 = [1,2,3,4,5,6,8];

// const A = arr2.myarr((myNum , index , actualArray)=>{
//     return myNum *2;
// })

// console.log(A);



{/*Polifill of Filter Function */}

// Array.prototype.myFilter = function(cb){
//     let temp = [];
//     for(let i=0; i<this.length; i++){
//         if(cb(this[i] , i , this))
//         temp.push(this[i]);
//     }
//     return temp;
// }

// const arr = [1,2,3,4,5,6,7,8,9];

// const filterArr = arr.myFilter((arrElement , index , arr)=>{
//     return arrElement > 5;
    
// })
// console.log(filterArr);

{/*PoliFill Of reduce function */}

// Array.Reduce((acc , cuElemnet , index , actArr) => {} , initialValue)

// Array.prototype.myReduce= function (cb , initialValue){
//      var Accumulator = initialValue;

//      for(let i=0; i<this.length; i++){
//          //  Cheak The Condition if Accumulator is Present Then Good to Go otherVise we Initialise a Value
//         Accumulator = Accumulator?(cb(this[i] , i , this)) : this[i];
//      }
//      return Accumulator;
// }

// const myArr = [1,2,3,4,5,6,7,8];

// const reduFun = myArr.myReduce((acc , Curreelem , index, actualArray)=>{
//         return acc+Curreelem;
// } ,0 )

// console.log(reduFun);

{/*What is Map And forEachLoop */}

// This Both are array Function to loop Through items of the array
 // map function return  a onother array 
 // We can perforn the onather functionllity on map Function


// const mapResult = arr.map((para)=>{
//     return para*2;
// }).filter()  This is called Chaining

// console.log(mapResult);

// For-Each Loop 
// It perforn the Normal Loop But it Don't Return a arrray like map does

// const arr = [1,2,3,4,5,6];
//  const foreachResult = arr.forEach((ar , i)=> {
//     arr[i] =  ar + 3
// })
// console.log(foreachResult , arr);


const Student = [
    {name : "masum" , age: 23, rollNUmber : 13 , marks : 80},
    {name : "Piyush" , age: 20, rollNUmber : 41 , marks : 0},
    {name : "Sahil" , age: 42, rollNUmber : 21 , marks : 800},
    {name : "Ashish" , age: 11, rollNUmber : 1 , marks : 1}
]
// Return Only Name Of Student in capital
// const cap = Student.map((stu) => stu.name.toUpperCase());
// console.log(cap);   

//Return only details of those who scored more than 60
// const more = Student.filter((stu) => stu.marks>60);
// console.log(more);
// const failStudent = Student.filter((para)=>{
//     //  return true; // as it is array return karega
//      // return false; empty Arry return krega
//  })
//  console.log(failStudent);

//return sum of mark of all student

const summark = Student.reduce((accu , elem) => accu+elem.marks , 0)
console.log(summark);

