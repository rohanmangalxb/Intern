import React from 'react'
import ThemeToggleButton from './ThemeToggleButton'

const Navbar = () => {
    return (
        <div className='Nav-Cont'>
            <div className="title">
                Navbar
            </div>
            <div className="button">
                <ThemeToggleButton />
            </div>
        </div>
    )
}

export default Navbar
