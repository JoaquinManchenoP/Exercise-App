import React from 'react'
import './login-page.css';

export default function LoginPage() {
    return (
        <div className='login__page'>
            <div className="login__page__content">
                <div className="greeting__section">
                    <h2>Welcome Back</h2>
                    <p>You've been missed</p>
                </div>
                <div className="login__input__section">
                     <div className="user__input">
                        <input placeholder='Username'/>
                        <input placeholder='password'/>
                     </div>
                </div>
                <div className="button__section">
                    <div className="login__button">
                        <button className='login__button'>Login</button>
                    </div>
                    <div className="option__separator">
                        <p>or</p>
                    </div>
                    <div className="register__section">
                        <button className='register__button'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
