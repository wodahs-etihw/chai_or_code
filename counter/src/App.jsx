import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div>
        {" "}
        <b>Counter Application</b>{" "}
      </div>
      <div>Value : {counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
