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





/*
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
