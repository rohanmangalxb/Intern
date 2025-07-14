import React, { useState } from 'react'
import './Layout.css'


const Toggle = (props) => {

    const [message, showMessage] = useState(true);

    return (
        <>
            <div className='inline-block font-bold bg-white w-80 h-10 items-center flex content-center px-2'>
                <span>{message? props.mssg : ""}</span></div>

            <div className="button flex gap-10 justify-between">
                <button className='bg-amber-200 p-3 hover:cursor-pointer w-[150px] font-bold' onClick={() => { showMessage(!message)}}>{message ? "Hide Message" : "Show Message"}</button>
            </div>
        </>
    )
}

export default Toggle
