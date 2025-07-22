import React, { useContext } from 'react'
import { ThemeContext } from '../context/context';
import Navbar from '../components/Navbar';

const Home = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`${theme} Home-cont`} on>

                <Navbar />

                <div className='Body'>
                    This is Body
                </div>
            </div>

        </>

    );
}

export default Home
