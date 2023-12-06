import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1", //element type
  { id: "heading" }, //attribute
  "Hello From React!!!" //children
);

const heading2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 Hello"),
    React.createElement("h2", {}, "H2 Hello"),
  ])
);
root.render(heading2);
