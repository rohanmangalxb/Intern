import React, { useState } from 'react'
import './login.css'

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setStatus] = useState(false)

    const delay = (d) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, d * 1000);
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let eerror = document.querySelector('.EError')
        eerror.textContent = "";

        let perror = document.querySelector('.PError')
        perror.textContent = "";



        // console.log("loadign")
        if (email && password) {
            e.reset;

            await delay(0.7)
            setStatus(true);
            await updateSt(email, password);
            console.log(localStorage)
            // console.log(email, password)
            // console.log(isLoggedIn)
        }
        if (!email) {
            eerror.textContent = "> Cannot leave this block empty, please Enter email!"
        }
        if (!password) {
            perror.textContent = "> Cannot leave this block empty, please Enter Password!"
        }

    };


    const updateSt = (async (e, p) => {
        const data = (`{ Email: ${e}, Password: ${p} }`);

        const old = localStorage.getItem("myFile") || {};
        // const old = raw ? JSON.parse(raw) : {};

        localStorage.setItem('myFile', old + data)

        alert(localStorage.getItem("myFile"))
    })


    return (
        <>{
            isLoggedIn ? (<>
                <h1>Welcome, {email}</h1>
                <button><a href="index.html">Go Back</a></button>
            </>
            ) : (

                <form action="" onSubmit={handleSubmit}>
                    <div className="email">
                        <label htmlFor="email">Email:</label >
                        <input type="email" onChange={(e) => setEmail(e.target.value)} id='mail' placeholder='Enter your email' />
                        <div className='EError'></div>
                    </div >

                    <div className="password">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="pass" id="pass" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                        <div className='PError'></div>
                    </div>

                    <div className="submit">
                        <input type="submit" name="submit" id="submit" />
                    </div>

                </form >
            )}
        </>
    )
}

export default LoginForm
