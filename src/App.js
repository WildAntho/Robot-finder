import React, { useState } from 'react';
/** Import de la donnée */
import './App.css';
import RobotCard from './components/RobotCard';

import Robots from './data/data';

function App() {

  // Initialisation du State

  const [input, setInput] = useState("")

  // Comportement

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    event.target.placeholder = ""
  }

  let newRobots = Robots.filter((robot) => robot.name.toLowerCase().includes(input.toLowerCase()));

  return (
    <div className="App">
      <h1>Robot Finder</h1>
      <form>
        <label>Rechercher </label>
        <input type='text' placeholder='Tapez votre robot' value={input} onInput={handleInput}></input>
        <button onSubmit={onSubmit}>Validé</button>
      </form>
      {newRobots.map(function (robot) {
        return <RobotCard key={robot.id} Robots={robot} />
      })
      }
    </div>
  );
}

export default App;
