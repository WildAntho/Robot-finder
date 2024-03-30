import { useState } from 'react'
import './navbar.css'

function NavBar({ toggle }) {

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