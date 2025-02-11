import React, { useState } from "react";
import LoginStructure from "./loginStructure";
import LoginControl from "./LoginControl";
import logo from '../../assets/8169b42adc2aef3a61b2bad03377c6a5-removebg-preview.png'
import SignUpControl from '../Signup/SignUpControl'
import SignUpStructuree from "../Signup/SignUpStructure";


const Auth = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  
  const loginConstructor =(Constructor)=>{
    return(
        <LoginStructure 
          id={Constructor.id}
          label={Constructor.label}
          name={Constructor.name}
          type={Constructor.type}
          placeholder={Constructor.placeholder}

        />
    )
   }

   const SignUpConstructor =(SConstructor)=>{
    return(
        <SignUpStructuree
          id={SConstructor.id}
          label={SConstructor.label}
          name={SConstructor.name}
          type={SConstructor.type}
          placeholder={SConstructor.placeholder}

        />
    )
   }


  return (
    <section className="forms-section cover">
       <img src={logo} alt="Near Logo"  style={{width:'200px'}}/>
      <div className="forms">
        <div className={`form-wrapper ${isLoginActive ? "is-active" : ""}`}>
          <button
            type="button"
            className="switcher switcher-login"
            onClick={() => setIsLoginActive(true)}
          >
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login">
          <fieldset>

          <legend>Please enter your email and password to log in.</legend>
           
            {LoginControl.map(loginConstructor)}
            </fieldset>
            <button type="submit" className="btn-signup">Login</button>
          </form>
        </div>
        <div className={`form-wrapper ${!isLoginActive ? "is-active" : ""}`}>
          <button
            type="button"
            className="switcher switcher-signup"
            onClick={() => setIsLoginActive(false)}
          >
            Sign Up
            <span className="underline"></span>
          </button>
          
          
          
          <form className="form form-signup">
            <fieldset>
              <legend>Please enter your email, password, and confirmation to sign up.</legend>
             
              {SignUpControl.map(SignUpConstructor)}
            </fieldset>
            <button type="submit" className="btn-signup">Sign up</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auth;
