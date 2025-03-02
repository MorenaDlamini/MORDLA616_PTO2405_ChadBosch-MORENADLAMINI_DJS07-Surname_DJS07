/**
 * @file Entry point of the React application.
 * @description This file renders the root component (`App`) into the DOM.
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/**
 * Renders the main application component (`App`) into the root DOM element.
 * 
 * @function
 * @returns {void}
 */
ReactDOM.render(<App />, document.getElementById("root"));
