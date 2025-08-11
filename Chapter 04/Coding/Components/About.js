import React from "react";
import User from "./User";
import UserClass from "./UserClass.";

class About extends React.Component {

    constructor(props) {
        super(props);
        // console.log("1. About Component Constructor called");
    }

    componentDidMount() {
        // This method is called after the component is mounted
        // console.log("About Component Mounted"); // This is where you can fetch data or perform side effects
    }


    render() {
        // console.log("2. About Component Rendered");
        return (
            <div className="about">
                <h1>About Us</h1>
                <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences.</p>
                <p>Our mission is to connect you with the finest restaurants and help you discover new culinary delights.</p>
                <p>Thank you for choosing us!</p>
                {/* <User name={"Yash Mamidwar (function)"} /> */}

                <UserClass name={"Yash Mamidwar (Class)"} />
                <UserClass name={"Elon Musk (Class)"} />
            </div>
        );
    }

}

export default About;