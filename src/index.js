import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";

import App from "./router";

// Main Styles
import "./style/Default/main.scss";

ReactDOM.render(<App />, document.getElementById("root"));
