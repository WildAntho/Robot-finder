import { useState } from "react"
import RobotAdress from "./RobotAdress"

import "./robotCard.css"

function RobotCard({ Robots }) {

    // Initialisation du State
    
    const [display, setDisplay] = useState(false)

    // Comportements

    const handleClick = () => {
        setDisplay(!display);
    }

    return (
        <div className="robotCard">
            <figure>
                <img src={`https://robohash.org/${Robots.id}?set=set2`} alt="" />
            </figure>
            <h1 className="name">{Robots.name}</h1>
            <p className="text">{Robots.phone}</p>
            <p className="text">{Robots.email}</p>
            <p className="text">{Robots.website}</p>
            {display ? <RobotAdress robotAddress={Robots.address} /> : false}
            <button className="showButton" onClick={handleClick}>{display ? "Hide Adress" : "Show Adress"}</button>
        </div>
    )
}

export default RobotCard