import React from 'react'
import back_3 from "../assets/background_3.png";
import '../styles/Login.css'

function Login() {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${back_3})` }}
            ></div>
            <div className="rightSide">
                <h1> Registration / Login</h1>

                <form id= "contact-form" method="POST">
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter your email..." type="email"/>
                    <label htmlFor="password">Password</label>
                    <input name="password" placeholder="Enter password..." type="password"/>



                    <button type="submit"> Log in</button>

                </form>
            </div>

        </div>
    )
}

export default Login