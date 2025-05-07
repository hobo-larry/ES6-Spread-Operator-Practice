import React, { useState } from "react";

function App() {
  let [inputText, setInputText] = useState("");
  let [items, setItems] = useState([]);
  function handleInputText(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addToArr() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInputText} value={inputText} type="text" />
        <button onClick={addToArr}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
