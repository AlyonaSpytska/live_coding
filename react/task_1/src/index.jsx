import ReactDOM from "react-dom";
import React from "react";
import "./index.scss";
import Auth from "./Auth.jsx";

// input props (obj)
// output jsx (кусок html, jsx)

const rootElem = document.querySelector("#root");

ReactDOM.render(<Auth />, rootElem);
