import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import './user-card.css'


const UserList = () => {

    const [sval, setSval] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [currPage, setCurrpage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                setData(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false)
            }
        }

        getData();
    }, [])



    const updatedUsers = useMemo(() => {
        let newUsers = [...data]

        if (sval) {
            newUsers = newUsers.filter(user => {
                return user.name.toLowerCase().includes(sval.toLowerCase());
            })
        }

        return newUsers

    }, [sval, data])

    const handleSearch = (e) => {
        setSval(e.target.value)
        setCurrpage(1)
    }


    const start = (currPage - 1) * 5;
    const end = start + 5;

    const pagedUsers = updatedUsers.slice(start, end);

    const pgclick = (i) => {
        setCurrpage(i + 1)

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if (loading) return <div>Loading Users...</div>;

    if (error) return <div>Error: {error}</div>

    return (
        <>

            <div className="searchBar">
                <input
                    type="text"
                    name="search"
                    id="searchBar"
                    placeholder='Search User by name'
                    value={sval}
                    onChange={(e) => handleSearch(e)}
                />
            </div>

            {/* {console.log(data.map(users => { return (users.name) }))} */}
            <div className="container">
                <div className="pageN">Page: {currPage}</div>
                <ul className='User-List'>
                    {pagedUsers.map(users =>
                    (

                        <li className='per-user rounded' key={users.id}>
                            <div className="name">
                                <div className="userinfo">
                                    Name :
                                </div>
                                <div className="infovalue rounded">

                                    {users.name}</div>
                            </div>
                            <div className="username">
                                <div className="userinfo">Username :</div>
                                <div className="infovalue rounded">

                                    {users.username}</div>
                            </div>
                            <div className="email">
                                <div className="userinfo">Email :</div>
                                <div className="infovalue rounded">

                                    {users.email}</div>
                            </div>
                            <div className="address">
                                <div className="userinfo">Address :</div>
                                <div className="infovalue rounded">

                                    {`${users.address.suite}, ${users.address.street}, ${users.address.city}, zipcode: ${users.address.zipcode}`}</div>
                            </div>
                            <div className="phone">
                                <div className="userinfo">Phone :</div>
                                <div className="infovalue rounded">

                                    {users.phone}</div>
                            </div>
                            <div className="website">
                                <div className="userinfo">Website :</div>
                                <div className="infovalue rounded">

                                    {users.website}</div>
                            </div>
                            <div className="company">
                                <div className="userinfo">Company:</div>
                                <div className="infovalue rounded">

                                    {users.company.name}</div>
                            </div>
                        </li>

                    )
                    )}
                </ul>
            </div>

            <div className="page_btns">
                <span>Page: </span>
                {Array.from({ length: Math.floor(updatedUsers.length/5) }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => pgclick(i)}
                        className={currPage === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </>
    )
}


export default UserList
