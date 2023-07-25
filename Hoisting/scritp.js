
// {/*What is Hoisting */}

// //Js Compailar Move all the variable and Function decleration to of their Scop Before te code Exucation is know as Hoisted...

// fun(); // Still Got A outPut with No error

// function fun(){

// }
// fun() // Still Got A outPut with No error

// console.log(a); // Undefine
// var a =10;
// console.log(a); //10


// {
//     // They Are Hoisted But They Are in temporal Dead Zone
//     // Demporal Dead Zone Is the Time Since The let variable was Hoisted Till The Valus has been Assingn That Time That is know as demporal Dead Zone
//     let a =10
//       b =10;
// }


// var a=10; // This is also Hoisted Js Compailar Stored a var in Global Memory

// {Interviwe Question}
// How can you avoid hoisting-related issues in your code? explain me in simple way
// Use "let" and "const" instead of "var": In modern JavaScript, we have two new ways to declare variables: "let" and "const". They are better than "var" because they follow stricter rules and don't have as many hoisting surprises. So, it's a good idea to use "let" and "const" instead of "var" whenever possible. 2)Assign values right away: After declaring a variable, make sure to give it a value before using it. Just like putting something inside a box as soon as you create it. This ensures that you have the right values when you need them.