import { useState } from 'react';
import './App.css';
import TaskForm from './Taskform';
import Tasklist from './Tasklist';

function App() {
  const [tasks, setTask] = useState([]);
  const addTask = (task) => {
    setTask([...tasks, task]);
  }
  return (
    <div className="App">
      <TaskForm addTask={addTask}/>
      <Tasklist Tasks={tasks}/>
    </div>
  );
}

export default App;
