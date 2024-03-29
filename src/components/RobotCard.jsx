import { useState } from "react"
import RobotAdress from "./RobotAdress"

function RobotCard({ Robots }) {

    // Initialisation du State
    const [display, setDisplay] = useState(false)

    // Comportements
    const handleClick = () => {
        setDisplay(!display);
    }

    return (
        <>
            <figure>
                <img src={`https://robohash.org/${Robots.id}?set=set2`} alt="" />
            </figure>
            <h2>{Robots.name}</h2>
            <h3>{Robots.phone}</h3>
            <h4>{Robots.email}</h4>
            <h4>{Robots.website}</h4>
            {display ? <RobotAdress robotAddress={Robots.address} /> : false}
            <button onClick={handleClick}>Show Adress</button>
        </>
    )
}

export default RobotCard