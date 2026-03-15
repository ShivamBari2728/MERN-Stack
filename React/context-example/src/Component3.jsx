import React, { useContext } from "react";
import { UserContext } from "./Component1";
function Component3 (){
    const{role} = useContext(UserContext)
    return (
            <div>
                <p>Welcome {role}</p>
              
            </div>
        );

}
export default Component3