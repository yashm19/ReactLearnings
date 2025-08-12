//React.createElement is a JS Object
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
// import Grocery from "./Components/Grocery";
import { lazy, Suspense } from "react";
/**
 * Header
  - Logo
  - Nav Items
 * Footer
    - Copyright
    - Contact Us
 * Body
   - Search
   - RestaurantList
      * RestaurantCard
 */

const Grocery = lazy(() => import("./Components/Grocery")); // Lazy loading the Grocery component

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet /> {/* This is where the child components will be rendered */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>,
        // element: <Grocery />,
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // This is how we render the app with the router
// ReactDOM.render(<AppLayout />, document.getElementById("root")); // This is how we render the app without the router
