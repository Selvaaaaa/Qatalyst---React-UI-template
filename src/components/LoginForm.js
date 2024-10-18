import React  from "react";
import "./LoginForm.css";
import logo from './Assests/logo.svg'
import google from "./Assests/google.svg"
import amazon from "./Assests/amazon.svg"
import Linkedin from "./Assests/LinkedIN.svg"
import Microsoft from "./Assests/microsoft.svg"
import { useNavigate } from "react-router-dom";


function LoginForm (){
  const navigate = useNavigate();

  function onSubmit(){
    navigate('/Exist')
  }
  function sendOTP(){
    navigate('/Verify')
  }

   

  return (
      <div className='right-section'>
      <div className='login-form'>
        <div id="logo-r">
        <img src={logo} alt="logo"/>
      </div>
      <h2>Start your journey with us</h2>
      <p id="create-acc">Create Your account</p>
      <div className="social-login">
        <button className="social-btn google"> <img src={google} alt="google" ></img> Google  </button>
        <button className="social-btn amazon"> <img src={amazon} alt="Amazon" ></img> Amazon</button>
        <button className="social-btn linkedin"> <img src={Linkedin} alt="Linkedin" ></img> LinkedIn</button>
        <button className="social-btn microsoft"><img src={Microsoft} alt="Microsoft" ></img> Microsoft</button>
      </div>
      <div id="signup-p">
      <span></span>
      <span>Or Signup with Email</span>
      <span></span>
      </div>
      <form>

        <p class="label">Your Work Email</p>
        <input type="email" placeholder="Enter Your Email ID" required />
        <p class="label">Create a Password</p>
        <input type="password" placeholder="Enter Your Password" required />
        <button id="send-verify" type="submit" onClick={sendOTP}>Send verification code</button>
      </form>
      <p>Already have an account? <a  onClick={onSubmit}>Login</a></p>
      </div>
    </div>

  );
}

export default LoginForm;
