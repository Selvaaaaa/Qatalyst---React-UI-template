import React from "react";
import "./ExistUser.css"
import Logo from './Assests/logo.svg'
import { useNavigate } from "react-router-dom";



function ExistUser(){
    const navigate=useNavigate()

    function Create(){
        navigate('/login')
    }

    return(
        
      <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src={Logo} alt="Qatalyst Logo" />
        </div>
        <h2>Welcome Back</h2>
        <p>Please sign in to continue</p>
        <form className="login-form">
          <label htmlFor="workspace"><b>Workspace Name</b></label>
          <div className="input-group">
            <input type="text" id="workspace" placeholder="Enter workspace name" required />
            <span className="domain">.getqatalyst.io</span>
          </div>
          <button type="submit" className="login-btn" disabled>Login</button>
        </form>
        <p>
          New to Qatalyst? <a  onClick={Create} >Create an account</a>
        </p>
      </div>
    </div>

    )
}
export default ExistUser;