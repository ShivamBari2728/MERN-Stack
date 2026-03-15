import React, { useState } from "react";
import { createContext } from "react";
import Component2 from "./Component2";

export const UserContext = createContext();
function Component1(){


    const[username] = useState("Shivam")
    const[role] = useState("Student")
    return(
       <UserContext.Provider value={{username,role}}>
        <div>
             <h2>Hello, {username}</h2>
        <Component2 />
      </div>
        

       </UserContext.Provider>
    );
}
export default Component1;