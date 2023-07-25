// we can achive the debounding with the help of setTimeout
// In our Application we have Bunch of Function . And In that Some Function that call unneccesry that time our Application will be Slow(Jarurat padhne pe hi call kiya jaye) , that time we use Debounding to enhance Our App Performance
// we want to call our function after a certain amount of time Also we want to call a function After a user Stop a typing , So that is Debounding and Throttling
 // jaise hi user apna action stop karenuske kuch milisecond bad vo function call hoga
// Exampal :- Flipcard Search Bar    Suppose we want search laptop , after some milisecond it show us result aftre user stop the typing
//  What is Debouncing?
// The basic idea of debouncing is to delay the execution of a function until a certain amount of time has passed since the last time the event was triggered
{
  /*Problen Statment of Debouncing  */
}

// var counter = 0;
// function getDate() {
//   console.log("Fetching API " + counter++);
// }

// // Now we use setTimeOut Web API

// function myDebound(call, d) {
//   let timer; // 
                      // (...agrs) jo bhi aap input doge vo parameater yaha recive honge hoge
//   return function (...agrs) { // anonmus function Clouser ka consept use ho raha hai
//     if (timer) clearTimeout(timer); // time running mai hai or dubara user ne kuch type kiya to purana   vala time fir se start hoga
//     timer = setTimeout(() => {
//       call();
//     }, d);
//   };
// }

// const bestSolution = myDebound(getDate, 1000);



{/*  Throttling in JavaScript */}

// jaise hi time pura ho apna function call cahe user action kre ya na kre
// jaise hi user ne click kiya time amara fix hai jaise hi time pura hoga vaise hi function call hoga fir cahe user ka action pura ho ya na ho


// const myThotal = (call , d)=>{
//   return function(...arg){
//     document.getElementById("myId").style.backgroundColor = "red";
//   setTimeout(()=>{
//     call();
//   }, d)
//   }

// }

// const newfun = myThotal(()=>{
//   document.getElementById("myId").style.backgroundColor = "black";
//   document.getElementById("myId").style.color = "white";

//   console.log("User Click !!")
// } , 5000)





// {/*For Practice */}
// let counter = 0;
// function geetDate(){
//   console.log("Fetch API" + counter++);
// }
