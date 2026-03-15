
import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState(["Shivam", "Kishan", "Raj"]);
  const addItems = () => {
    let newitem = "Item" + (items.length + 1)
    setItems([...items, newitem]);
  }
  // const[ text, setText]=useState ("Click here");
  // const chngeText=()=> {
  //   setText("Button clicked");
  // }

  //  const addNumbers = () => {
  //   let num1 = 10;
  //   let num2 = 20;
  //   let sum = num1 + num2;

  //   alert("Addition is: " + sum);
  // };
  // return (
  //   <div className="App">


  //     <button onClick={chngeText}>
  //       {text}
  //     </button>
  //   </div>
  // );

  return (
    <div>
      <ul>
        {items.map((item,index)=>
        <li key={index}> {item}</li>
        )}
      </ul>


      <button onClick={addItems}>
        add Item
      </button>
    </div>
  )
}

export default App;
