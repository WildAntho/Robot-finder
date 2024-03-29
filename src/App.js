import React, { useState } from 'react';
/** Import de la donnée */
import './App.css';
import RobotCard from './components/RobotCard';
import Robots from './data/data';
import { IoSearchOutline } from "react-icons/io5";

function App() {

  // Initialisation du State

  const [input, setInput] = useState("")

  // Comportements

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  // Filtrage du tableau de données en fonction de l'input
  let newRobots = Robots.filter((robot) => robot.name.toLowerCase().includes(input.toLowerCase()));

  return (
    <div className="App">
      <h1>Robot Finder</h1>
      <form className='search'>
        <IoSearchOutline className='iconSearch'/>
        <input className='input' type='text' placeholder='Search...' value={input} onInput={handleInput}></input>
        <button className='valide'>Validé</button>
      </form>
      <div className='cardRobots'>
        {newRobots.map(function (robot) {
          return <RobotCard key={robot.id} Robots={robot} />
        })
        }
      </div>
    </div>
  );
}

export default App;
