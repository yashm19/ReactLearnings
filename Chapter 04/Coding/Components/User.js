import { useState } from "react";

const User = (props) => {
    const { name } = props;
    const { count } = useState(0);
    const { count2 } = useState(1); //multiple state variables can be used in functional components

    return (
        <div className="user">
            <h1>Count: {count}</h1>
            <h1>Name : {name}</h1>
            <p>Location: Pune</p>
        </div>
    );
}

export default User;