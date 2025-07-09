# To Learn :
- *HTML:*
    -
    - Complete page structure
    - Navigation bar
    - Form elements
    - Semantic tags
- *CSS:*
    -
    - Layout with flexbox and grid
    - responsive design using media queries
    - hover and focus states
    - form styling: input padding, button color, etc.
- *JS:*
    -
    - DOM selection and manipulation
    - Handling submit event with .addEventListener()
    - Preventing default form reload with event.preventDefault()
    - Getting values from form inputs using .value


## 1 - HTML:

- The page structure of a general html page includes a navigation bar, a header, main body or sections, a footer.
- A good HTML page should involve all the elements mentioned above.

- The ***Navigation bar*** involves the title or name of the site, and other linking components to navigate through the page easily, such as About, Contact, Home, Drop-Down menus, etc.

- Various ***Form Elements*** includes input, label, textarea, select, button,etc. :
    -

    - **input** - used for dynamically taking input from the user on html page interface. input are of various kinds such as text, radio, date, email, etc.
    - **label** - used for giving a heading and adding a label to the input
    - **textarea** - used to take a input that maybe in the format of paragraphs. It is assigned with initial rows and columns. 
    - **select** - used to take a input in the format of drop-down menu which contains several options given in select
    - **button** - button input maybe submit or reset used for reloading form after submit and reseting form respectively!

- **Semantic Tags** are used to define certain part of the html such as navigation bar, main body, or footer.

## 2 - CSS :

- The elements of html page can be configured with different layouts. The most common and efficient layouts would be **grid and flexbox**.

- grid divides the body of element into specified sections or grids. 

- flexbox is similar to grid but rather than dividing into sections it gives specified area to the element in given direction of flex.

- **media queries** are responsible for giving a responsive layout to the html page. They changes the layout properties as per given and based on the specified dimensions.
- **hover and focus** states can be styled using the :hover or :focus pseudo-class.  and they are used as events when mouse hover over the element or the element is focused!

- **form styles** such as padding, colors and other syltes in the input are set only in the form to make it more interactive

- Padding adds space inside an element, while background and text colors can be set with the background-color and color properties, respectively.


## 3 - JS :

- **DOM** access the elements by using document.{query};

- document renders to the html page and its elements

- **form** is automatically reloaded whenever submit button is clicked. Thus we add an event to submit and use **preventDefault()** to prevent auto reloading of page as:

<pre>
btn.addEventListener("click", (e) => {
    e.preventDefault();

    form.reset() //used to reset the page
})
</pre>

- we can get **values** from **input** from the document by using .value method!

<pre>
let email = document.getElementById("email").value
</pre>