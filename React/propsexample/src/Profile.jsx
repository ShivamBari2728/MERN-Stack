import Bio from "./Bio"
import Avatar from "./Avatar"
import React from "react"
function Profile(userData){
    return(
        <div>
            <Avatar
            image = {userData.image}
            />
            <Bio
             name={userData.name}
             description={userData.description}
            />
        </div>
    )
}
export default Profile