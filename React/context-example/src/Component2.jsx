import React, { useContext } from "react";
import { UserContext } from "./Component1";
import Component3 from "./Component3";

function Component2() {
    const {username} = useContext(UserContext);
    return (
        <div>
            <p>Welcome {username}</p>
            <Component3 />
        </div>
    );
}
export default Component2