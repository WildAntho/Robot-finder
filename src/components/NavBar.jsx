// import React, { useEffect, useRef } from 'react';
import './navbar.css'

function NavBar({ toggle, setToggle }) {

    // const refOne = useRef(null);

    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside, true)
    // },
    //     [])

    // const handleClickOutside = (e) => {
    //     if (!refOne.current.contains(e.target)) {
    //         console.log('Clicked outside');
    //         toggle === 'navBar active' ? setToggle('navBar') : setToggle('navBar')
    //     }
    //     else {
    //         console.log('Clicked inside');
    //     }
    // }

    return (
        <nav className={toggle}>
            <ul className='list'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )

}

export default NavBar