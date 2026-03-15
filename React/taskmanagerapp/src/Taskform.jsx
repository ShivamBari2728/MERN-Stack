import { useState } from "react"

function TaskForm({addTask}){

    const[Task,setTask] = useState("")

    const handelsubmit = (e)=>{
        e.preventDefault();
        if(Task.trim()=== "") return;
        addTask(Task);
        setTask("");
    }


    return(
        
        <form onSubmit={handelsubmit}>
            <input type="text" placeholder="Enter task" 
            value={Task} 
            
            onChange={(e)=>setTask(e.target.value)
                
            } 
            
            />
            <button type="submit">Add task</button>
        </form>
        
    )
}
export default TaskForm;