import { useRef, useState } from "react"
import RobotAdress from "./RobotAdress"
import LikeButtons from "./LikeButtons"
import Options from "./Options";
import { BiDotsVerticalRounded } from "react-icons/bi";


import "./robotCard.css"

function RobotCard({ Robots }) {

    // Initialisation du State
    const [display, setDisplay] = useState(false)
    const [status, setStatus] = useState('showButton')
    const [option, setOption] = useState(false)
    // const refOption = useRef(null);

    // Comportements
    const handleClick = () => {
        setDisplay(!display);
    }

    const handleShow = () => {
        setStatus('showButton ok')
    }

    const handleHide = () => {
        setStatus('showButton')
    }

    const handleOption = () => {
        setOption(!option)
    }

    return (
        <div className="robotCard" onMouseEnter={handleShow} onMouseLeave={handleHide}>
            <LikeButtons />
            <figure>
                <img src={`https://robohash.org/${Robots.id}?set=set2`} alt="" />
            </figure>
            <h1 className="name">{Robots.name}</h1>
            <p className="text">{Robots.phone}</p>
            <p className="text">{Robots.email}</p>
            <p className="text">{Robots.website}</p>
            {display ? <RobotAdress robotAddress={Robots.address} /> : false}
            <button className={status} onClick={handleClick}>{display ? "Hide Adress" : "Show Adress"}</button>
            <BiDotsVerticalRounded className="threePoint" onClick={handleOption} />
            {option === true && <Options setOption={setOption} />}
        </div>
    )
}

export default RobotCard