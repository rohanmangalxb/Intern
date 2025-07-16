import React from 'react'

const userCard = (user) => {
  return (
    <div>
      <div className='username flex'>
        <div className="title">Name: </div>
        <div className="name">{user.name}</div>
      </div>


      <div className='userrole flex'>
        <div className="title">Role: </div>
        <div className="role">{user.role}</div>
      </div>

    </div>
  )
}

export default userCard
