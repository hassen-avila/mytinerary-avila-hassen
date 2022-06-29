

import "../style/logIn.css";
import React from "react";
import { useDispatch } from "react-redux";
import "../style/logIn.css";

import userActions from "../redux/action/userAction";



export default function Login(){
    
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
      event.preventDefault()
    const userData = {
      email: event.target[0].value,
      password:event.target[1].value,
    }
dispatch(userActions.signInUser(userData))
  }
  

    return (    
      <div className="container-log">
        <h1 className="container-h1">Welcome back!</h1>
        <form action="" onSubmit={handleSubmit}>
        <input
          className="input-log"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="input-log"
          name="password"
          placeholder="Password"
          required
        />
  
        <button
          className="button-log"
          type="summit"

        >
          Submit
        </button>
        </form>
      </div>
    );
  }