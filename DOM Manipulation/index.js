// what is DOM? 
// 1) "The DOM stands for Document Object Model.
//  2) It is a representation of the HTML structure of a web page, allowing JavaScript to interact with and manipulate the elements on the page dynamically.
//  3) Think of it as a tree-like structure where each element in the HTML, such as a paragraph, heading, or button, is represented as a node in the tree. JavaScript can access these nodes, modify their content, attributes, or styles, add new elements, or remove existing ones. 
// 4)  In summary, the DOM enables JavaScript to dynamically interact with and modify the structure and content of a web page."


//  selectors
// ============================================

// getElementById :-

// var lists = document.getElementById("list"); // we acces the whole ul element not that have id name list
// console.log(lists);
// diff . between innerText and textContains
// lists.innerText = "Fruits";
// lists.textContent = "Fruits 1"

// let heading = document.getElementById("heading");
// console.log(heading.innerText);  // giving the attention to the styleing part
// console.log(heading.textContent); // Ignore the Styling part
// we see the no differance here but if we add the css here textContent ignore the styling part and innerText geving attention to the styling part 

// ================================================================================

// getElementsByClassName
// using getElementsByClassName we get our entier Element but using innerHtml or textContent we access the Whatever content in that Element

// let itemList = document.getElementsByClassName('list-item');
// console.log(itemList); // whole list are acces
// console.log(itemList[2]); // second index are acceseble means Entaier Element
// console.log(itemList[2].innerHTML); // acces the Content inside the Element
// Using the index item we can access the item 

// itemList[2].style.color = "red";

// var i;
// for(i=0 ; i<itemList.length; i++){
//     itemList[i].style.color="red"  // change the color 
//     itemList[i].style.fontSize = "40px" // increase the font size
// }

// ======================================================================================

// getsElementByTagName selector

// var input = document.getElementsByTagName('li');
// var input = document.getElementsByTagName('ul');
// console.log(input);

// ========================================================================================

// querySelector

// if we have a list and we acces the with the help of querySelector the we will get the 1st element of that list
// with the help of this we can acces the id and class name with . and # also
// let list = document.querySelector('li');
// console.log(list);

// ===========================================================================================
// querySelectorAll
// it give the all items of that perticular tag name
// let list = document.querySelectorAll('li');
// console.log(list);

// ===============================================================================================

// SECTION TWO

// parentNode And parentElement

// let list = document.querySelector("#list");
// console.log(list.parentNode); // we get the list ids parent
// console.log(list.parentElement);// we get the list ids parent

// let list_item = document.querySelector(".list-item");
// console.log(list_item.parentNode); // we get the list ids parent
// console.log(list_item.parentElement);// we get the list ids parent
// =====================================================================================================

// CHILDNODE AND CHILDELEMENT

// let list = document.querySelector('#list');  

// console.log(list.childNodes); // we get all the nodes and child
// console.log(list.children) // we get only child all child.
// console.log(list.children[1]) // we get 1st element 
// console.log(list.firstChild); // we get the first text
// console.log(list.firstElementChild); // we get the first Actuall element
// console.log(list.lastChild); // we get the last text
// console.log(list.lastElementChild); // we get the last Actuall element
// console.log(list.previousSibling);// parent ke uppar ka text milta hai
// console.log(list.previousElementSibling); // parent ke uppar ka elemnt milta hai
// console.log(list.previousElementSibling.previousElementSibling); // jisko acces kiya hai uske upper ke upper ka milta hai
// console.log(list.nextSibling); // list ke niche vale ka text acces hota
// console.log(list.nextElementSibling);// list ke niche vala elemnt acces hoga 

// ======================================================================================================

// How to creat the Elements

// let h1 = document.createElement("h1");
// console.log(h1);
// h1.className = "heading";
// h1.id = "hedi";
// // h1.innerText = "Masum";
// h1.setAttribute('title' , 'im heading')

// var heding = document.createTextNode("Hi my name is masum"); // craete the text and we appent where we want using appendchild
// h1.appendChild(heding);

// =========================================================================================================
// Remove the child

// let heading = document.querySelector('#heading');
// heading.remove(); // remove the perticular element
 // Remove the child note we have to find the parent node
 // if we have to container and we want to remove the child of that that time we need to use it
//  ex:-
//  var body = document.querySelector('body');
//  var button = document.querySelector('#btn');
//  body.removeChild(button);

// ==============================================================================================================

// Replace the element

// let para = document.createElement('p');
// let node = document.createTextNode("This is my para");

// para.appendChild(node);

// let body = document.querySelector('body');
// let p = document.querySelector('p')
// body.replaceChild(para , p)

// ========================================================================================================

// Event listener 
