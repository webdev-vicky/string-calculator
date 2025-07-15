import React, {useState} from 'react';
import './App.css';
import InputBox from "./components/InputBox";

function App() {
    const [numbersInput, setNumbersInput] = useState('');
    return (
    <div >
      <InputBox value={numbersInput} onChange={setNumbersInput}/>
    </div>
  );
}

export default App;
