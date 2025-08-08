//React.createElement is a JS Object
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/restaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
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
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
