

import "../style/logIn.css";
import React from "react";
import { useDispatch } from "react-redux";
import "../style/logIn.css";

import userActions from "../redux/action/userAction";

const Swal = require('sweetalert2')




export default function Login(){
  const dispatch = useDispatch()
  
  const handleSubmit = async (event) => {
 
  event.preventDefault()
  const userData = {
    email: event.target[0].value,
    password:event.target[1].value,
  }
  const res= await dispatch(userActions.signInUser(userData))
  console.log(res.data);

  if(res.data.success === true){
    Swal.fire({
      title: `${res.data.message}`,
      text:  'Have a nice day!!',
      imageUrl: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsY29tZSUyMHNpZ258ZW58MHx8MHx8&w=1000&q=80',
      imageWidth: 550,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
  else{
    Swal.fire({
      title: 'Are you a new user?',
      text:  res.data.message,
      imageUrl: 'https://img.freepik.com/vector-gratis/hombre-mirando-traves-grandes-prismaticos-muy-delante-buscando-algo-persona-mirando-alguien-cerca-nino-viaja-prismaticos_458444-516.jpg?w=2000',
      imageWidth: 500,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
  
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