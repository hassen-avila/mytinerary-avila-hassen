import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import userActions from "../redux/action/userAction";
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'


const GoogleSignIn = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate()

  async function handleCallbackResponse(response) {
    let userObject = jwt_decode(response.credential);
    const res= await dispatch(
      userActions.signInUser({
        
        email: userObject.email,
        password: userObject.sub,
        from: "google",
      }),
    )
    
  if(res.data.success === true){
    
    Swal.fire({
      title: `${res.data.message}`,
      text:  'Have a nice day!!',
      imageUrl: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsY29tZSUyMHNpZ258ZW58MHx8MHx8&w=1000&q=80',
      imageWidth: 550,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
    navigate('/index')
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
  
  useEffect(() => {
    /* global google */
 
    google.accounts.id.initialize({
      client_id:
        "15100862035-vtmgkckdn1vftua21p12amqm0fqvi95n.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("button-div"), {
      theme: "outline",
      size: "large",
      type: "standard",
      shape: "rectangular",
      locale: "en",
      text: "button",
      width: "100%"
    });
  });

  return (
    <div id="button-div" >
    </div>
  );
};

export default GoogleSignIn;