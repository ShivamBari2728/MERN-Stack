import React from "react";
function Employee(data){
    return (
        <div>
            <p>Employee Name : {data.name}</p>
            <p>Employee status : {data.status}</p>
        </div>
    )

}
export default Employee;