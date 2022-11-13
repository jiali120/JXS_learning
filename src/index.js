//var React = require("react");
//var ReactDom = require("react-dom");

// we can use import able to modularise these dependencies far better
import React from "react";
import ReactDOM from "react-dom";

//React works by creating these JSX files
//so files where we've got HTML right in the body of JS file
//we have used the ReactDOM module's render module in order to display a h1 inside that root div
//ReacDom.render(what to show, where to show it)
ReactDOM.render(
  <div>
    <h1>Hllo</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);

/*  
*BABEL website can transfer the code languena
* JS code is longer than React code
var h1=document.createElement("h1");
h1.innerHTML = "Hello";
document.getElementById("root").appendChild(h1);
*/





/* 2. 
practice
//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite Books</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Apple</li>
    </ul>
  </div>,
  document.getElementById("root")
);
*/


/* how to add js
* Javascript Expressions in JSX & ES6 Template Literals

import React from "react";
import ReactDOM from "react-dom";

const fname="Jia";
const lname="Li"
const num=7;

ReactDOM.render(
  <div>
     //expression VS. statement in JavaScript
     //we've got interpreted as string by using ES6 template literals : <h1>Hello {`${fname} ${lname}`}!</h1>
 //and then we've got that string being inserted in as JS these curly braces from JSX.
 // and then it's being inserted as a string into our h1 and then that is being inserted as JS code into JS file
 <h1>Hello {fname+" "+lname}!</h1> // Hello {fname} {lname} also is corret
 
  <p>Your lucky number is {Math.floor(Math.random()*10)}</p>
  </div>, 
  document.getElementById("root")
);
*/

/* 3. date and year practice
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";
const name="Jia";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Creat By Your Name: {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
)
*/
