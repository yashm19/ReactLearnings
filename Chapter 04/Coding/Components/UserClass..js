import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1 // multiple state variables can be used in class components
        }; // class based component state initialization
        // console.log(this.props.name + "3. UserClass Constructor called");
    }

    componentDidMount() {
        // This method is called after the component is mounted
        // console.log(this.props.name + "5. UserClass Component Mounted");
    }

    render() {
        // This will return the JSX to be rendered , similar to functional component return
        // console.log(this.props.name + "4. UserClass Render called");
        return (
            <div className="user">
                <h1>Count: {this.state.count}</h1>
                <h1>Name : {this.props.name}</h1>
                <p>Location: Pune</p>
            </div>
        );
    }
}

export default UserClass;