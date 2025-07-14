import React from 'react'
import './Layout.css'

const UserCard = (props) => {
    return (
        <>
            <div className="container bg-blue-200 p-3 my-5 rounded-lg">


                <div className="name text-red-600"><b className='inline-block w-[70px] text-black'>Name:</b> {props.name}</div>
                <div className="email text-blue-600"><b className='inline-block w-[70px] text-black'>Email:</b> {props.email}</div>
                <div className="role text-yellow-900"><b className='inline-block w-[70px] text-black'>Role:</b> {props.role}</div>
            </div>
        </>
    )
}

export default UserCard
