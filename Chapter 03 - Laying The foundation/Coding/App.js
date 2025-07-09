//React.createElement is a JS Object
import React from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createElement => React Object => HTML(rendered to the DOM)

const jsxHeading = (
  <h1 className="heading">Namaste React Using JSX {5 + 58}</h1>
); //for multiple lines, you need to wrap it in parentheses

//Parser will convert this JSX into React.createElement calls under the hood.
//Babel is a tool that converts JSX into JavaScript code that React can understand.
//Parser contains babel which is a tool that converts JSX into React.createElement calls.

// React Component
// Functional Component is a function that returns a React Element or JSX.

//Component Composition is the process of combining multiple components to create a more complex UI.

const mumber = 10000;

const Title = () => <h1 className="heading">Namaste React Title Component</h1>;
// This is a functional component use html tags to call inside JSX
const titleElement = <h1 className="heading">Namaste React Title Element</h1>;
//This is javascript varaible so use paraentesis to call inside jsx

// use parenthesis to write javascript or javascript expressions inside JSX
const HeadingComponent = () => (
  <div className="heading-container">
    <Title />
    {Title()} {/* This is a functional component call */}
    {titleElement}
    {mumber + 1000}
    <h1 className="heading">Namaste React Functional Component {5 + 58}</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")); // ReactDOM is used to render the React Element to the DOM

root.render(<HeadingComponent />); // this will replace the content of the root element with the React Element created above
// to render a functional component use the component name as a tag
// ReactDOM.render(<HeadingComponent />, document.getElementById("root")); // this is the old way of rendering a React Element to the DOM
