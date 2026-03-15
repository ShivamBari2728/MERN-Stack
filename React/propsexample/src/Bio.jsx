import React from "react";
function Bio(userData){
    return(
        <div>
            <h2>{userData.name}</h2>
            <p>{userData.description}</p>
        </div>
    )
}
export default Bio;