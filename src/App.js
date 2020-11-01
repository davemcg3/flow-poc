import React, { useState } from 'react';
import './App.css';
import IteratorClient from './flows/iterator-client';
import {CollectName, CollectAddress, CollectEmail, CollectPhone} from "./flows/components";

function App() {
  const flows = [
    [CollectName, CollectAddress, CollectPhone, CollectEmail], // userCreateFullA
    [CollectName, CollectEmail, CollectPhone, CollectAddress], // userCreateFullB,
    [CollectName, CollectEmail], // userCreateMinimal
  ];
  const [selectedFlow, setSelectedFlow] = useState(2);
  const [step, setStep] = useState(0);

  const selectChanged = (event) => {
    setSelectedFlow(event.target.value);
    setStep(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Modular Forms</h1>
        <select name="selectedFlow" onChange={selectChanged} value={selectedFlow}>
          <option value="0">User Create: Full A</option>
          <option value="1">User Create: Full B</option>
          <option value="2">User Create: Minimal</option>
        </select>
      </header>
      <IteratorClient flow={flows[selectedFlow]} step={step} setStep={setStep} />
    </div>
  );
}

export default App;
