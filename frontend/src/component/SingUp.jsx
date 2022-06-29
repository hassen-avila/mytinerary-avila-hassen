import React from "react";
import { useDispatch } from "react-redux";
import "../style/logIn.css";
import { useState } from "react";
import userActions from "../redux/action/userAction";
import axios from "axios";


export default function SingUp(){
    const HeadingText ="Hi!";
    const [isMouseOver, setMouseOver] = useState(false);
    const dispatch = useDispatch()
  
    const handleSubmit = (event) => {
        event.preventDefault()
      const userData = {
        nameUser: event.target[0].value,
        lastNameUser: event.target[1].value,
        email: event.target[2].value,
        password:event.target[3].value,
        photoUser:event.target[4].value,
        country:event.target[5].value,
      }
 dispatch(userActions.singUpUsers(userData))
    }
  
    function handleMouseOver() {
      setMouseOver(true);
    }
  
    function handleMouseOut() {
      setMouseOver(false);
    }
  
    

    const [countries, setCountries] = React.useState([]);
    React.useEffect(() => {
      axios.get('https://restcountries.com/v3.1/all')
      .then(res=>{(setCountries(res.data))
  
    })
  ;
    }, []);
    let country = countries.map(count=>count.name.common).sort()
  

    return (    
      <div className="container-log">
        <h1 className="container-h1">  
          {HeadingText}
        </h1>
        <form action="" onSubmit={handleSubmit}>
        <input
          className="input-log"
          name="nameUser"
          placeholder="First Name"
          required
        />
        <input
          className="input-log"
          name="lastNameUser"
          placeholder="Last Name"
          required
        />
        <input
          className="input-log"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="input-log"
          name="password"
          placeholder="Password"
          required
        />
        <input
          className="input-log"
          name="photoUser"
          placeholder="PhotoUser Url"
          required
        />
        <select className="input-log" required>
        <option>Country</option>
        {country.map((country,index)=>
        <option value={country} key={index}>{country}</option>
        )}
        </select>
       
        <button
          className="button-log"
          type="summit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Sing in
        </button>
        </form>
        <div className="singIn-Net">
        <button className="buttonSing learn-more">
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">Google</span>
        </button>
        <button className="buttonSing learn-more learn-more1">
            <span className="circle circle1" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">Facebook</span>
        </button>
        </div>
      </div>
    );
  }