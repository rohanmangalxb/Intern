import React, { useState } from 'react'
import './Layout.css'


const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div className='w-fit p-1 px-10 font-bold bg-white'>{count}</div>

            <div className="button flex gap-10 justify-between">

                <button className='font-bold bg-amber-200 p-3 hover:cursor-pointer' onClick={() => { setCount(count + 1) }}>Increase +</button>
                <button className='font-bold bg-amber-200 p-3 hover:cursor-pointer' onClick={() => { setCount(count - 1) }}>Decrease -</button>
            </div>
        </>
    )
}

export default Counter
