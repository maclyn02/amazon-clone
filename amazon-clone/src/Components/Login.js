import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <Link to='/' className='login__logo'>
                <div>amazon</div>
            </Link>
            <div className='login__form'>
                <div className='login__header'>Sign-In</div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <button>Sign-In</button>
            </div>
            <hr />
            <div>
                <button class='login__registerButton'>Create an Amazon account</button>
            </div>
        </div>
    )
}

export default Login
