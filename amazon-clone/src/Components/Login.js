import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import './Login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // use history for redirection
    const history = useHistory()

    const login = event => {
        // stops the refresh
        event.preventDefault()
        // login logic
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                //Login success -> goto homepage
                history.push('/')
            })
            .catch((error) => alert(error.message))
    }

    const register = event => {
        // stops the refresh
        event.preventDefault()
        // register logic
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // created a user and logged in -> goto homepage
                history.push('/')
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/' className='login__logo'>
                <div>amazon</div>
            </Link>
            <form className='login__form'>
                <div className='login__header'>Sign-In</div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={email} onChange={event => setEmail(event.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} />
                <button onClick={login}>Sign-In</button>
            </form>
            <hr />
            <div>
                <button className='login__registerButton' onClick={register}>Create an Amazon account</button>
            </div>
        </div>
    )
}

export default Login
