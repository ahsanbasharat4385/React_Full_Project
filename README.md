# Some Pictures of This Product
# Home Page with Header
![Screenshot (9)](https://github.com/ahsanbasharat4385/React_Full_Project/assets/163886352/4620eb6b-2d92-4bea-947c-0e3cefa963bd)

![Screenshot (10)](https://github.com/ahsanbasharat4385/React_Full_Project/assets/163886352/1beb09cc-c50c-4d07-ba4f-5e1eba9804e8)
# Footer
![Screenshot (11)](https://github.com/ahsanbasharat4385/React_Full_Project/assets/163886352/dc230c76-ee1d-4369-bd4e-70d26c8aa02d)
# Vite Project with Tailwind CSS

If you are Fresher and you are try to make project in react or vite with tailwind CSS this product will support you alot
Before Stating this project you should have basic knowledge of
1) HTML
2) CSS
3) React
4) React Hooks "useState, useEffect, useRef" Definitions of Hooks are given Below
5) React Routes "React Router Dom"
   
# React Interview Questions

# 1) What is Hooks?
Hooks is a normal function of javascript. In react we can't update the variable of UI Component that is why we use hooks.
# Hooks Conditions
1) Hooks are top level of function component
2) Hooks Import
3) Don’t call inside the loop, if else or nested function
4) Must be written inside function component
# 2) What is useState?
Stata is a javascript object that holds some information about components that may be changed over time.
Syntax:
Const [temp,setTemp] = usestate (5)
They return two value one is Current value and second is function"The value that is changed over time"
# 3) What is UseEffect?
Hooks allow you to perform side effects in your functional component. Side Effects like fetching data, API fetch, Timer Function(timeout, setinterval), local storage.
Syntax
UseEffect(()=>{what},[when])
"what" means Function and "when" means dependency
# 4) What is useRef?
We use UseRef for DOM manipulation, sometimes we can’t do changes in HTML directly by using props and state. To handle direct changes we use UseRef for example: get Specific value of input, change it color or background color, handle focus.

1) First, we store useRef in variable
2) Second, set ref inside the DOM Element
3) Use .current for change
We use UseRef for form Handling, useRef can’t render the whole component, 

# 5) What is React Router DOM?
React Router DOM is a popular library used for handling routing in React applications.
# React Router Dom Routes
1) BrowserRouter
2) Routes
3) Route path=” ” element={}
2) Routes
1) BrowserRouter

You must open and close the routes

# 6) What is Virtual Dom?
It is a carbon copy of real DOM when you make any changes to a component or a state of react application, react create a virtual dom, then it compares this updated virtual dom with previous one to identify the specific change that occurred. Once it determines the difference (known as “diffing” process) finally only those specific changes are applied to the real dom.
# 7) What is Reconciliation?
Process of comparing the current virtual dom with the previous one, identifying the difference and updating the real dom is called reconciliation.
# 8) What is Props?
Props are basically used to pass data from one component (Parent) to another component(Child).
Props are read-only and can’t modified by child component
# 9) What is Map?
Map Method is used for creating a new array from existing one

SYNTAX:
{ data.map((el)=>{return({el.title})})}

# "-----> JavaScript Interview Questions <-----"
# 1) What is Javascript?
Answer: javaScript is a scripting language that is used to create a website more dynamic and attractive.

# 2) Data Types in js?
JavaScript has 8 Datatypes
1) String
2) Number
3) Bigint
4) Boolean
5) Undefined
6) Null
7) Symbol
8) Object

# 3) What is Variable?
Variable are used to store data
# 4) types of variables in javascript?
Three types of variables : lets var and const
# 5) When to Use var, let, or const?
1) Always declare variables
2) Always use const if the value should not be changed
3) Always use const if the type should not be changed (Arrays and Objects)
4) Only use let if you can't use const
5) Only use var if you MUST support old browsers.
6) Let and const has Block Scope and var has Global Scope
# 6) What is hoist in Js?
Means: a variable can be used before it has been declared.

EXAMPLE:
1) x = 5; // Assign 5 to x
2) elem = document.getElementById("demo"); // Find an element
3) elem.innerHTML = x;                     // Display x in the element
4) var x; // Declare x
# 7) What is Call Back in Js?
In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after a certain task is completed or when a specific event occurs. Callback functions are commonly used in asynchronous operations such as fetching data from an API, handling user input, or executing tasks after a timeout.
# 8) Javascript is single threaded why?
Answer: JavaScript is single-threaded, meaning it can handle only one task at a time.
# 9) What is AAsynchronous and Synchronous?  
<b>Asynchronous</b> is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. <b>Synchronous</b> is a blocking architecture, so the execution of each operation depends on completing the one before it.
