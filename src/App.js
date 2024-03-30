import React, { useState } from 'react';
/** Import de la donnée */
import './App.css';
import RobotCard from './components/RobotCard';
import Robots from './data/data';
import NavBar from './components/NavBar';
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";

function App() {

  // Initialisation du State
  const [input, setInput] = useState("")
  const [toggle, setToggle] = useState('navBar')
  const [line1, setLine1] = useState('line1')
  const [line2, setLine2] = useState('line2')
  const [line3, setLine3] = useState('line3')

  // Comportements
  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleDelete = () => {
    setInput("")
  }

  const handleToggle = () => {
    toggle === 'navBar' ? setToggle('navBar active') : setToggle('navBar')
    line1 === 'line1' ? setLine1('line1 first') : setLine1('line1')
    line2 === 'line2' ? setLine2('line2 second') : setLine2('line2')
    line3 === 'line3' ? setLine3('line3 third') : setLine3('line3')

  }

  // Filtrage du tableau de données en fonction de l'input
  let newRobots = Robots.filter((robot) => robot.name.toLowerCase().includes(input.toLowerCase()));

  return (
    <div className="App">
      <div className='burgerIcon' onClick={handleToggle}>
        <div className={line1}></div>
        <div className={line2}></div>
        <div className={line3}></div>
      </div>
      <NavBar toggle={toggle} />
      <div className='mainTitle'>
        <IoLogoGameControllerB className='controllerIcon' />
        <h1 className='titleRobot'><span className='robotColor'>Robot</span> Finder</h1>
      </div>
      <form className='search'>
        <div className='input-wrapper'>
          <IoSearchOutline className='iconSearch' />
          <input className='input' type='text' placeholder='Search...' value={input} onInput={handleInput}></input>
          {input !== "" && <IoCloseOutline className='closeIcon' onClick={handleDelete} />}
        </div>
        <button title='Search' className='valide'><IoSearchOutline className='iconSearchWhite' /></button>
        <button className='microButton'><FaMicrophone className='micro' /></button>
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
