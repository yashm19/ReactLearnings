//React.createElement is a JS Object
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import sampleRestaurantData from "./utils/mockData";
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
      <Body sampleRestaurantData={sampleRestaurantData} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
