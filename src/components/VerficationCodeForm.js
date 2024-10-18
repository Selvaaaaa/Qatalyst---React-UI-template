import React, { useState } from 'react';
import './VerificationCodeForm.css'; 
import mail from "./Assests/mail.svg";
import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const VerificationCodeForm = () => {

  const notify = () =>toast.success('Code Set to the Email', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition:Bounce,
    });

  const [code, setCode] = useState(new Array(6).fill(''));

  const handleInputChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setCode([
      ...code.map((d, idx) => (idx === index ? element.value : d)),
    ]);

  
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="verification-container">
      <div className="verification-box">
        
        <div className="icon">
          <img src={mail} alt="Verification Icon" />
        </div>
        <h2>Enter Verification Code</h2>
        <p>
          Verification code has been sent to{' '}
          <strong>selvask6802@gmail.com</strong>
        </p>
        <div className="input-container">
          {code.map((data, index) => {
            return (
              <input
                className="code-input"
                type="text"
                name="code"
                maxLength="2"
                key={index}
                value={data}
                onChange={e => handleInputChange(e.target, index)}
                onFocus={e => e.target.select()}
              />
            );
          })}
        </div>
        <button className="verify-btn"  onClick={notify}>
          Verify Code
        </button>
        <ToastContainer />
        <p className="resend">
          Didn't receive the code? <a >Resend Code</a>
        </p>
      </div>
    </div>
  );
};

export default VerificationCodeForm;
