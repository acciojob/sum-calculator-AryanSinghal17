
import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(total);
    }, 0);

    return () => clearTimeout(timer);
  }, [numbers]);

  const handleAdd = () => {
    if (input.trim() === "") return;

    const num = parseInt(input, 10);

    if (!isNaN(num)) {
      setNumbers((prev) => [...prev, num]);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={input}
        placeholder="Enter a number"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>Add Number</button>

      <h3>Sum: {sum}</h3>

      <p>Numbers: {numbers.join(", ")}</p>
    </div>
  );
};

export default App;
