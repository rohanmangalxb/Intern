## TO LEARN :
<pre>
- What is the DOM? 
- document.getElementById() 
- document.querySelector() 
- Changing content with .innerText, .innerHTML, .value 
- Adding event listeners (click, input) 
- Modifying styles with .style
- createElement, appendChild, removeChild 
- classList.add/remove/toggle 
- Event bubbling (just intro) 
</pre>


# What is DOM? :
- DOM (Document Object Model) is a platform that allows user to dynamically access, control, modify and update the contents, structure and style of a web-page or document.

- It treats document as an object and access its elements.
- The HTML DOM is a standard object model and programming interface for HTML. It defines:

    - the elements of HTML as objects.
    - the properties of a HTML.
    - the methods to access HTML elements.
    - the events added to the HTML elements.

- Various features of DOM includes:

## 1 - document.getElementById() :

- This method is used to access the elements of a HTML doc that are given an id.

- Ex : 
<pre>
document.getElementById("container") //Suppose a div element with id = "container"
</pre>

- It allows user to access the element and perform desired operations and changes upon the content linked with that element!

## 2 - document.querySelector() or document.querySelectorAll() :

- This method used to access the first element of the given identification factor.
- the identification factor can be either tag, className or id.
- to select all the elements, 'querySelectorAll()' is used.

- Ex :
<pre>
let a = querySelector("div") //for tag
let a = querySelector(".box") //for class
let a = querySelector("#continer") //for id

let a = querySelectorAll(".objs") //to select all
</pre>

## 3 - Changing content with .innerText, .innerHTML, .value :

### a - *.innerText:*
- This method is used on an element of a HTML. It is used to access or modify the text content of that element.

- It only access the textual data of html excluding tags and all.
- Ex: 
<pre>
//old - My self xyz  (class = 'about')

//js:
let content = document.querySelector(".about")
content.innerText = 'My self abc'

//new - My self abc
</pre>

### b - *.innerHTML:*
- This is similar to .innerText but unlike innerText it access all the properties of HTML including HTML tags and elements.

### c - *.value:*
- It is used over elements which are assigned some values in the HTML such as radio element, select element, etc.

- Generally for input type of elements to acces the inputs given by the user remotely!

## 4 - Adding event listeners (click, input) :

- an Event-Listener is a function that runs dynamically when certain event occurs on a element of HTML. 

- Syntax :
> element.addEventListener(event, function, useCapture);

    - the first parameter in () to give type of event such as mouseClick, any keyboard button, scroll, etc.
    - the second parameter1 to give the instruction of what to happen after the event has occured.
    - The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

- Various types of events are:
    - "click": fires whenever mouse clicks
    - "input": fires whenever the input value changes
    - "keydown": Fires when a key is pressed
    - "keyup": Fires when a key is released
    - "focus": fires when input is focused
    - "blur": fires when input loses focus

- Ex :

<pre>
let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    alert("Button is clicked");
})
</pre>

## 5 - Modifying styles with .style :

- JS can also be used to add or modify styles of elements of the HTML using .style!

- although the syntax and variable name for styles slightly differ from actual css.

- Syntax: 
> element.style.type = 'value';

- Ex :
<pre>
let btn = document.querySelector("button");
btn.style.border = 'none';
btn.style.borderColor = 'azure'; //although in css, border-color, but '-' not used in js.
</pre>

## 6 -  createElement, appendChild, removeChild :

- These methods used to modify the inner content of a html.
- They are used to append or remove an element within an element.

- To add a new element, it must be created first by createElement.

- appendChild appends the newest element as a child to bottom of the parent element (since it may already contain some child elements), i.e, it add the new child as last of the parent element.

- removeChild used for removing a child element from the parent node.

Ex :
<pre>
let el = document.querySelector(".container")
let newChild = document.createElement("div");
newChild.classList.add("box6") //to give class to this element

/*assume el has 5 divs as box1, box2, ..., box5*/

el.appendChild(newChild) //add box6 after box5

const b3 = document.getElementByClass("box3")

el.removeChild(b3); //removes box3 from container.

</pre>


## 7 - classList.add/remove/toggle 

- classList is used to access classes given to an element of  HTML.

- It  accepts one or more class names as separate string arguments.

    ### a - *.add:*
    - it is used to add classes to the already present classes of an element. 

    - multiple classes can be added at a time.

    >x.classList.add("c1", "c2", "c3")

    ### b - *.remove:*
    - used to remove specified class from the class list.

    ### c - *.toggle:*
    - It is a special method generally used with event listeners that adds and remove class from the element with alternate runs or event occurence.

    - For instance, it adds a class on 1st click while remove at 2nd and adds at 3rd and goes on.


## 8 - Event bubbling: 

- It is a phenomenon in DOM where when certain event or change happens in a child node, it will push the same modification to its ancestors, i.e., child -> parent -> grandparent and so!

- Event bubbling is a behavior in the DOM where an event starts from the target element and then bubbles up (i.e., propagates) through its ancestors — parent → grandparent → document, etc.

- When the button is clicked, the event flow is:

   > #btn → #inner → #outer → document...

- Ex :

<pre> 

<div id="outer" style="padding:30px; background:#f0f0f0;">
  Outer Div
  <div id="inner" style="padding:30px; background:#c0c0f0;">
    Inner Div
    <button id="btn">Click Me</button>
  </div>
</div>

<script>

 document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("btn").style.color = 'red';
  });

  document.getElementById("inner").addEventListener("click", () => {
    document.getElementById("inner").style.color = 'red';
  });

  document.getElementById("outer").addEventListener("click", () => {
    document.getElementById("outer").style.color = 'red';
  });
  
  </script>
  </pre>