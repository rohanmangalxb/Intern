import React, { useEffect, useContext } from 'react'
import { ThemeContext } from '../context/context'


const ThemeToggleButton = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key.toLowerCase() === 'd') {
                toggleTheme();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [toggleTheme]);
    return (
        <div className='toggle-cont' >
            <button className={`toggle-btn ${theme}`} onClick={toggleTheme}>
                <div className="theme-icon-container">
                    <div className="light-img">
                        <img  width={'30px'}
                            src="https://img.freepik.com/free-vector/sun-gradient-style_78370-4241.jpg?semt=ais_hybrid&w=740"
                            alt="Light"
                        />
                    </div>
                    <div className="dark-img">
                        <img width={'30px'}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GbmmW63Qk-AfzQgTdD8sgFcZkRaRr6eHSw&s"
                            alt="Dark"
                        />
                    </div>
                </div>
            </button>
        </div>
    )
}

export default ThemeToggleButton
