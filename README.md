# Vite Project with Tailwind CSS

If you are Fresher and you are try to make project in react or vite with tailwind CSS this product will support you alot
Before Stating this project you should have basic knowledge of
1) HTML
2) CSS
3) React
4) React Hooks "useState, useEffect, useRef" Definitions of Hooks are given Below
5) React Routes "React Router Dom"
# React Interview Questions

# What is Hooks?
Hooks is a normal function of javascript. In react we can't update the variable of UI Component that is why we use hooks.
# Hooks Conditions
1) Hooks are top level of function component
2) Hooks Import
3) Don’t call inside the loop, if else or nested function
4) Must be written inside function component
# What is useState?
Stata is a javascript object that holds some information about components that may be changed over time.
Syntax:
Const [temp,setTemp] = usestate (5)
They return two value one is Current value and second is function"The value that is changed over time"
# What is UseEffect?
Hooks allow you to perform side effects in your functional component. Side Effects like fetching data, API fetch, Timer Function(timeout, setinterval), local storage.
Syntax
UseEffect(()=>{what},[when])
"what" means Function and "when" means dependency
# What is useRef?
We use UseRef for DOM manipulation, sometimes we can’t do changes in HTML directly by using props and state. To handle direct changes we use UseRef for example: get Specific value of input, change it color or background color, handle focus.

1) First, we store useRef in variable
2) Second, set ref inside the DOM Element
3) Use .current for change
We use UseRef for form Handling, useRef can’t render the whole component, 

# What is React Router DOM?
React Router DOM is a popular library used for handling routing in React applications.
# React Router Dom Routes
1) BrowserRouter
2) Routes
3) Route path=” ” element={}
2) Routes
1) BrowserRouter
You must open and close the routes

#  What is Virtual Dom?
It is a carbon copy of real DOM when you make any changes to a component or a state of react application, react create a virtual dom, then it compares this updated virtual dom with previous one to identify the specific change that occurred. Once it determines the difference (known as “diffing” process) finally only those specific changes are applied to the real dom.
# What is Reconciliation?
Process of comparing the current virtual dom with the previous one, identifying the difference and updating the real dom is called reconciliation.
# What is Props?
Props are basically used to pass data from one component (Parent) to another component(Child).
Props are read-only and can’t modified by child component
# What is Map?
Map Method is used for creating a new array from existing one

SYNTAX:
{ data.map((el)=>{return({el.title})})}


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
