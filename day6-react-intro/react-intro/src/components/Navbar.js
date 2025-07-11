import React from 'react';
import './Layout.css'

function Navbar(props) {
    return (
        <nav>

            <div className="logo">{props.title}</div>

            <ul className="links">
                <li onClick={() => {

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }
                } className='home_button'>Home</li>
                <li onClick={() => {
                    document.getElementById("ABOUT").scrollIntoView({ behavior: 'smooth' });
                }
                } className='About_button'>About</li>
            </ul>
        </nav>
    );
}

export default Navbar;