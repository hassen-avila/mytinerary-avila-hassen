import React from "react";

import "../style/logIn.css";
import{ useState } from "react";


export default function Login(){
    const [HeadingText, setHeadingText] = useState("Hi!");
    const [isMouseOver, setMouseOver] = useState(false);
    const [contact, setContact] = useState({
      fName: "",
      lName: "",
      email: ""
    });
  
    function handleChange(event) {
      const { name, value } = event.target;
  
      setContact((prevValue) => {
        return {
          ...prevValue,
          [name]: value
        };
      });
    }
  
    function handleClick() {
      setHeadingText("Submitted");
      setContact({
        fName: "",
        lName: "",
        email: ""
      });
    }
  
    function handleMouseOver() {
      setMouseOver(true);
    }
  
    function handleMouseOut() {
      setMouseOver(false);
    }
  
    return (    
      <div className="container-log">
        <h1 className="container-h1">  
          {HeadingText} {contact.fName} {contact.lName}{" "}
        </h1>
        <input
          className="input-log"
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          className="input-log"
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          className="input-log"
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
  
        <button
          className="button-log"
          onClick={handleClick}
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </div>
    );
  }