import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">The counter is currently&nbsp; </h1>
      <span data-test="count">{count}</span>

      <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        Increment counter
      </button>
    </div>
  );
}

export default App;
