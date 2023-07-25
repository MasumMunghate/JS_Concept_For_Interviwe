// What is Event Prapogation
// The Complt Prosecce deciding when and which direction the event will be executated is called Event prapagation 
// Exampal Div form and Button vala dena hai

// "Event propagation in JavaScript refers to the way events are handled and propagated through the DOM (Document Object Model) tree. When an event occurs on an element, such as a button click or a mouse movement, the event can trigger handlers on that element as well as its parent elements, all the way up to the root of the document.

// {Their are Two main type in Event Prapogation}
// 1) Event Bublling :- down to up
// 2)Event Capturing / Event Trickling :- up to down 

{/* What is Event Bubbling */}
// Bubbal is always go, down to up like wise in bubbling The event go from botton to up it means Button form and div. and this is a defult behaviou 
// By Default Event Bubbling is the procces that happend
// top level hirarchi pr cala jayega

// const Div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button")

// The event are fire bottom to up is called Event Bubbling
// window.addEventListener("click" ,function(){
//     alert("window");
// });


// Div.addEventListener("click" ,function(){
//     alert("div");
// });

// button.addEventListener("click" ,function(){
//     alert("button");
// });

// form.addEventListener("click" ,function(){
//     alert("form");
// });
// Their is Some event Thet are not Bubbal like focus and Blure 

{/*event.target vr this.target and event.currentTarget */}

// const Div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button")

// Div.addEventListener("click" , func);
// button.addEventListener("click" , func);
// form.addEventListener("click" , func);

// // currentTarget.tagName is bubbales
// //  event.target.tagName  is aiming toword the button (portion which we click on page)
// // this is exactly work as similar as event.currentTarget
// function func (event){
//     alert("current Target is =" + event.currentTarget.tagName + " , target ="+ event.target.tagName + " this "+this.tagName); 
// }

{/*Event Capturing / Trickling  */}

//Event Capturing means whitch make the event  exicuted from top to bottom

const Div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button")

    Div.addEventListener("click" ,function(){
        alert("div");
    }, {
        capture : true
    });
    
    button.addEventListener("click" ,function(){
        alert("button");
    },{
        capture : true
    });
    
    form.addEventListener("click" ,function(){
        alert("form");
    },{
        capture : true
    });


{/*How to stop the bubbling and  Capturing / Trickling   */}
// with the help of stop prapogation we can do stop the bubbling and  Capturing

// const Div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button")

//     Div.addEventListener("click" ,function(e){
//         e.stopPropagation();
//         alert("div");
//     }, );
    
//     button.addEventListener("click" ,function(e){
//         e.stopPropagation();
//         alert("button");
//     },);
    
//     form.addEventListener("click" ,function(e){
//          e.stopPropagation();
//         alert("form");
//     },);

    {/* Event Delegation */}

    // Event Delegation means where we add eventlistener to the parent element insted of adding to the decendent element 

    // document.querySelector(".products").addEventListener('click' , (event)=>{
    //     if(event.target.tagName === "SPAN"){
    //         window.location.href += "/" + event.target.className;
    //     }
           
    // })





