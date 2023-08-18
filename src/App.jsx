import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='calc-container'>
      <div className="output">
        <input type="text" id="output" disabled placeholder="0"/>
      </div>
      <div className="calc-buttons">
        <button onclick="clearResult()" className="clear">CLEAR</button>
        <button onclick="deleteValue()" className="delete">DELETE</button>
        <button onclick="appendValue('7')">7</button>
        <button onclick="appendValue('8')">8</button>
        <button onclick="appendValue('9')">9</button>
        <button onclick="appendValue('/')">/</button>
        <button onclick="appendValue('4')">4</button>
        <button onclick="appendValue('5')">5</button>
        <button onclick="appendValue('6')">6</button>
        <button onclick="appendValue('*')">x</button>
        <button onclick="appendValue('1')">1</button>
        <button onclick="appendValue('2')">2</button>
        <button onclick="appendValue('3')">3</button>
        <button onclick="appendValue('-')">-</button>
        <button onclick="appendValue('.')">.</button>
        <button onclick="appendValue('0')">0</button>
        <button onclick="calculate()" className="equal">=</button>
        <button onclick="appendValue('+')">+</button>
      </div>
    </div>
  )
}

export default App
