// React Element are not similar to HTML elements , it becomes an html element when it is rendered
// React Element is a JS Object

// JSX is a HTML-like syntax that allows you to write React elements in a more readable way.
// BUt it is not html inside javascript, it is a syntax extension that allows you to write HTML-like code in your JavaScript files.

// JSX => React.createElement => React Object => HTML(rendered to the DOM)

const jsxHeading = (

  <h1 className="heading">Namaste React Using JSX {5 + 58}</h1>
); //for multiple lines, you need to wrap it in parentheses

//Parser will convert this JSX into React.createElement calls under the hood.
//Babel is a tool that converts JSX into JavaScript code that React can understand.
//Parser contains babel which is a tool that converts JSX into React.createElement calls.
