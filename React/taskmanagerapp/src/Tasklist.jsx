function Tasklist({Tasks}){
    return(
        <ul>
            {
                Tasks.map((Task,Index)=>{
                    return <li key={Index}> {Task} </li>
                })
            }
        </ul>
    )
}
export default Tasklist