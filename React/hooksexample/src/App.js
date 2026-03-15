
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {


  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  useEffect(() => {
    setDouble(count * 2);
  }, [count]);  // use effect runs when ever dependency changes

  const increment = () => {
    setCount(count + 1);
  };




  //OnKeyDown of a div
  // const [count, setCount] = useState(0);
  // const handleKeyPress = () => {
  //   setCount(count + 1);
  // };

  //Onchnge event
  // const [inputvalue, setInputValue] = useState("");
  // const handelchnage = (event) => {
  //   setInputValue(event.target.value);
  // }


  // toggle example
  // const [status, setStatus] = useState("OFF");

  // const toggle = () => {
  //   setStatus(status === "OFF" ? "ON" : "OFF");
  // };
  //  const pageStyle = {
  //   backgroundColor: status === "ON" ? "black" : "white",
  //   color: status === "ON" ? "white" : "black",
  //   height: "100vh",
  //   textAlign: "center",
  //   paddingTop: "50px"
  // };

  return (
    // <div className="App" style={pageStyle}>
    //   <h1>Status: {status}</h1>

    //   <button onClick={toggle}>
    //     Toggle
    //   </button>
    // </div>


    // OnChange event
    // <div>
    //   <h2>React Form</h2>

    //   <form>
    //     <input
    //       type="text"
    //       placeholder="Enter something..."
    //       value={inputvalue}
    //       onChange={handelchnage}
    //     />
    //   </form>

    //   <h3>You entered: {inputvalue}</h3>
    // </div>


    // onKeyDown of a div
    // <div>
    //   <h2>Key Press Counter</h2>

    //   <div
    //     tabIndex="0"
    //     onKeyDown={handleKeyPress}
    //   >
    //     Click here and press any key
    //   </div>

    //   <h3>Key Press Count: {count}</h3>

    // </div>


    
    <div>
      <h2>Counter: {count}</h2>
      <h2>Multiple of 2: {double}</h2>

      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default App;
