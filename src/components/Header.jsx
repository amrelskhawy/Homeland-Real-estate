import React from 'react'
import logo from "../assets/img/logo.svg"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="container mx-auto">
                <Link to='/'>
                    <img src={logo} alt="Homeland Logo" />

                </Link>
            </div>
        </header>
    )
}

export default Header