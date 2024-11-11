import React, { useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function SignUp() {
    const [errorMessage, setErrorMessage] = useState('')
    const  handleSignUp = (event) =>{
        
        event.preventDefault()
        
        const email= event.target.email.value;
        const password= event.target.password.value;
        console.log(email, password)

        setErrorMessage('')
        if(password.length<6){
            setErrorMessage('it should be al least 6')
            return
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/; 
        if(!passwordRegex.test(password)){
            setErrorMessage('fix the password')
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error.message)
            setErrorMessage(error.message)
        })
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form  onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            {
                errorMessage && <p>{errorMessage}</p>
            }
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}
