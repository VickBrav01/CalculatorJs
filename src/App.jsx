import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleNumberClick = (value) => {
    setInput(input + value);
  };

  const handleClearClick = () => {
    setInput("");
  };

  const handleDeleteClick = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqualClick = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calc-container">
      <div className="output">
        <input type="text" id="output" value={input} disabled placeholder="0" />
      </div>
      <div className="calc-buttons">
        <button onClick={handleClearClick} className="clear">
          CLEAR
        </button>
        <button onClick={handleDeleteClick} className="delete">
          DELETE
        </button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleNumberClick('/')}>/</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleNumberClick('*')}>x</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleNumberClick('-')}>-</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('+')}>+</button>
        <button onClick={handleEqualClick} className="equal">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
