import React, { useMemo, useState } from 'react'
import UserCard from './userCard'

const userList = ({ users }) => {

    //filtering:
    const [searchTerm, setSearchTerm] = useState('');
    const [showInternsOnly, setShowInterns] = useState(false);

    //sorting:
    const [sortBy, setSortBy] = useState('name')
    const [sortOrder, setSortOrder] = useState('asc')


    //working on filtering and sorting:
    const updatedUsers = useMemo(() => {
        let currUsers = [...users];

        //searching:
        if (searchTerm) {
            // console.log("searching")
            currUsers = currUsers.filter(user => {
                // console.log(user.name.toLowerCase().includes(searchTerm.toLowerCase()))
                return user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.role.toLowerCase().includes(searchTerm.toLowerCase());
            })
            console.log(currUsers)
        }

        //filtering interns:
        if (showInternsOnly) {
            currUsers = currUsers.filter(user => user.role.toLowerCase().includes('intern'))
        }

        //sorting:
        currUsers.sort((a, b) => {

            let comp = 0;
            if (typeof a[sortBy] === 'string') {
                comp = a[sortBy].localeCompare(b[sortBy]);
            } else {
                comp = a[sortBy] - b[sortBy];
            }
            return sortOrder === 'asc' ? comp : -comp;
        })

        return currUsers
    }, [users, searchTerm, showInternsOnly, sortBy, sortOrder])



    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
        console.log(e.target.value)
    }

    const handleToggleFilter = (e) => {
        setShowInterns(e.target.checked);
    }

    const handleSort = (criteria) => {
        if (sortBy === criteria) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(criteria);
            setSortOrder('asc')
        }
    }

    return (
        <>

            <span className='header'>List of Available users: </span>
            {users.length === 0 ?

                <div className='no_users'>No users Found!</div> :

                <>
                    <div className="editBar">
                        <input
                            id='search'
                            type="text"
                            placeholder='Search User by name or role'
                            value={searchTerm}
                            onChange={(e) => handleSearchChange(e)}
                        />


                        <button className='sort-button' onClick={() => handleSort('name')}>
                            Sort by Name {sortBy === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                        </button>
                    </div>

                    <div className="filter">
                        <input
                            id='showInterns'
                            type="checkbox"
                            checked={showInternsOnly}
                            onChange={handleToggleFilter}
                        />
                        <label htmlFor="showInterns">Show interns only</label>


                        {/* <button className='fbtn'>Show interns only</button> */}
                    </div>

                    <div className="list">

                        {updatedUsers.length === 0 ? (
                            <div className='no_users'>No users match your criteria.</div>
                        ) : (
                            updatedUsers.map(user => (
                                <div className='usercard' key={user.id}>
                                    <UserCard name={user.name} role={user.role} />
                                </div>
                            ))
                        )}
                    </div>
                </>
            }
        </>
    )
}

export default userList
