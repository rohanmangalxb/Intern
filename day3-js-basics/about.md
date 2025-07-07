## 1 - How to run JS in browser console or .js file

Can be executed using developer console in browser. Another way is to include it in html file.

## 2 - var, let, const – declaring variables

- **var** :

  - Variables declared with var can be reassigned and re-declared within the same scope.
  - var declarations are hoisted to the top of their scope, meaning they can be accessed (with an undefined value) before their actual declaration in the code.

- **let** :
  - Variables declared with let can be reassigned but cannot be re-declared within the same block scope.
  - let declarations are hoisted but are subject to the Temporal Dead Zone (TDZ). This means they cannot be accessed before their declaration and initialization in the code, resulting in a ReferenceError if attempted.

- **const** :
    -  Variables declared with const cannot be reassigned after their initial assignment. for objects or arrays declared with const, their contents can still be modified but not their instance.

    -  Like let, const declarations are also hoisted but are subject to the Temporal Dead Zone (TDZ), preventing access before declaration and initialization.

## 3 - Data types: string, number, boolean, array, object 

- **String** : 
    - collection of characters forming a word or sentence.
    - can take any type of data type as input
    - based on indexing
    - Ex : <pre>let name = "rohan Mangal"</pre>

- **Number** :
    - takes numerical input only. 
    - it can be integer, real number, float, hexadecimal, octal, etc.
    - Ex :<pre>
        > *positive integer*
        - let ID = 2197;
        > *Float*
        - let score = 45.25;
        > *negative integer*
        - let blood_sugar = -20; 
        >*Hexadecimal*
        - let Title_Color = 0x854712; 
        >*exponential*
        - let problem = 2.06e+3; 
        </pre>

- **boolean** :
    - a boolean value takes true or false as input
    - used to verify a certain condition in general
    - Ex : <pre>let alive = true; </pre>

- **Array** :
    - An array is collection of multiple values under a single a data type.
    - Similar to String, Array is also index based. A String is collection of characters while and Array is collection of elements. 
    - Arrays in javascript can have elements of different data types like String, boolean, number, object, function, and other arrays too.

    - Ex : <pre>let order = [25, “Burgers”, 50.99, true];</pre>

- **Object** :
    - object also stores multiple data values under a single element.
    - Unlike Arrays values in objects are not identified by index but they are given their own title to identify them.
    - Ex : 

<pre>let myObj = { 
“height-Cm”: 175, 
“weight-lbs”: 275, 
“distance-km”: 75 
};</pre>

## 4 - if, else, else if conditions 

- These conditions are used to verify the occurence of particular event. if the event occurs then do some work and if does not then do another work or abort as per requirement.
- Ex :
<pre>
let stage;
if(age>=18){
    stage = 'adult'
} else if(age>=12){
    stage = 'teen'
} else {
    stage = 'kid'
}
</pre>

## 5 - Loops: for, while :
- loops allow user to execute a task for a number of times as per required with any updates to perform in each run.

- Ex :
    1. <pre>
        let count = 10
        for(let i = 0, i <= count, i++){
            console.log(i);
        }
    </pre>

    2. <pre>
        let count = 10;
        let i = 0;
        while(i <= count){
            console.log(i)
            i++;
        }
    </pre>


## 6 - Functions: declaration and calling :

- Functions are fundamental building blocks in programming, enabling code reusability and modularity.

- A function declaration informs the compiler about a function's name, return type, and parameters before it's used, while a function call executes the function's defined code.

Ex : 
<pre>function name(parameters); //declaration

function name(parameters){
    //any data
    return xyz //return some value
}

let z = name(arguments); //calling name function. function returns xyz so z = xyz.

</pre>

## 7 - prompt(), alert() (for small inputs/outputs) 

- prompt() used to take input from user in a .js program!
- alert() gives a specified message to user in a .js program

## 8 - Array basics: .push(), .pop(), .length :
- As Array is a sequential collection of data, various queries can be performed on it such as adding data, removing data, etc.
- Each element is marked with an index in sequential order starting from 0 (generally).

- push(), pop() are used to add and remove an element respectively.

- Ex :
<pre>
let arr = [1, 5, 20, 'rohan', 'mangal', 32];
console.log(arr[4]). //mangal

arr.pop() //32 removed from array.

arr.push(54) //55 added to array
</pre>

- shift(): Removes the first element from an array.
- Adds one or more elements to the beginning of an array. 
- splice(): Changes the content of an array by removing or replacing existing elements and/or adding new elements.
- sort(): Sorts the elements of an array in place.
- reverse(): Reverses the order of the elements in an array in place.
- concat(): Joins two or more arrays and returns a new array. 
-slice(): Extracts a section of an array and returns a new array.

- join(): Joins all elements of an array into a string.
- toString(): Returns a string representing the specified array and its elements.
- indexOf(): Returns the first index at which a given element can be found in the array.

- lastIndexOf(): Returns the last index at which a given element can be found in the array.

- includes(): Determines whether an array includes a certain value among its entries, returning true or false.

- arr.length : gives the size of array!

## 9 - typeof operator :
- The typeof operator in JavaScript is a unary operator used to determine the data type of its operand. It returns a string indicating the type of the evaluated operand. 
- Ex :
<pre>
typeof variableName;
</pre>

## 10 - String methods (toUpperCase(), includes(), etc.) 

- **toUpperCase** : 
<pre>//set data in uppercase
Rohan -> ROHAN
</pre>
- **toLowerCase** : 
<pre>
//set data in lowercase
Rohan -> rohan
</pre>
- **includes** : 
<pre>
//checks for whether desired value present in string:
str = 'rohan'
str.includes(z) -> gives false
</pre>
- **trim** : 
<pre>
//removes white space from string
rohan mangal -> rohanmangal
</pre>
- **replace** : 
<pre>
// replace the specified value with new one
str.replace('roh', 'ruh') : rohanmangal -> ruhmangal
</pre>
- **charAt** : 
<pre>
// gives the character at given index (starting from 0):
str.charAt(2) -> 'h'
</pre>
- **substring** : 
<pre>
// gives substring from given index
str.substring(0, 5) -> ruhan
</pre>
- **length** : 
<pre>
//gives length of string
str.length() -> 12
</pre>