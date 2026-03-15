import React from "react";
function Avatar(userData){
    return(
        <div>
            <img src={userData.image} alt="Profile" width="150" height="150" />
        </div>
    )
}
export default Avatar;