import React from 'react'
import './CSS/LoginSign.css'

const LoginSign = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email id'/>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <div className="loginsignup-login">
          <p>Already have an account? <span>Login Here</span> </p>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing,I agree to the terms of condition and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSign