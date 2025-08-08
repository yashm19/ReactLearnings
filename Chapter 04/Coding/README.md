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

Important Hooks
Inbuilt js utility functions

- useState -- useful for creating state varaibles
- useEffect

Reconcilation Algorithm

# Use Effect hook

- if no dependency array then useffect is called on every component render
- if we have dependency array the behavior changes

Case 1 - Empty dependency array, only initial render useeffect is called, even if the component is rerendered
Case 2 - If there is depnedency , then useeffect will be called on dependency array change

# Router

react-router-dom npm package

Use App.js to create configuration for routing.

- CreateBrowserRouter will create a path list
- Outlet will provide a tunnel to apply the routes
- RouterProvider to provide the path config to root element

# Two Types of routing in web apps

- Client side routing -- Just loading the specific component or changing the component
- server side routing -- traditional way to reloading the page by making a network call.
