import React from 'react'

const Navbar = (props) => {
  return (
    <nav className='flex justify-between bg-amber-700 text-white p-4 fixed w-dvw top-0'>

        <div className="logo mx-2 font-bold">{props.title}</div>

        <ul className="links flex justify-between w-30 mx-3 gap-5">
            <li onClick={ ()=>{

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
            } className='cursor-pointer hover:text-emerald-500 hover:font-bold hover:underline'>Home</li>
            <li onClick={ ()=>{
                document.getElementById("ABOUT").scrollIntoView({ behavior: 'smooth' });
            }
            } className='cursor-pointer hover:text-emerald-500 hover:font-bold hover:underline'>About</li>
        </ul>
    </nav>
  )
}

export default Navbar
