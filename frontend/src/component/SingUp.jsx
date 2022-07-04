import React from "react";
import { useDispatch } from "react-redux";
import "../style/logIn.css";
import { useState } from "react";
import userActions from "../redux/action/userAction";

import Swal from 'sweetalert2'
import GoogleSignUp from "./GoogleSingApp";

function alerts(params) {
  if(params.data.success === true){
    Swal.fire({
      title: `${params.data.message}`,
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
      text:  params.data.message,
      imageUrl: 'https://img.freepik.com/vector-gratis/hombre-mirando-traves-grandes-prismaticos-muy-delante-buscando-algo-persona-mirando-alguien-cerca-nino-viaja-prismaticos_458444-516.jpg?w=2000',
      imageWidth: 500,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })}
  
}



export default function SingUp(){
    const HeadingText ="Hi!";
    const [isMouseOver, setMouseOver] = useState(false);
    const dispatch = useDispatch()
    const [selectCountry, setSelectCountry] = React.useState([]);


    const [contador, setContador] = React.useState(0);
    console.log(contador);

    React.useEffect(()=>{
      if(contador==0 ){

    Swal.fire({
      title: 'Please Select your country',
      input: 'select',
      inputOptions: {
          'Argentina': 'Argentina',
          'Australia': 'Australia',
          'Brazil': 'Brazil',
          'Chile': 'Chile',
          'Colombia': 'Colombia',
          'China': 'China',
          'Mexico': 'Mexico',
          'Germany': 'Germany',
          'France': 'France',
          'India': 'India',
          'Italy': 'Italy',
          'Japan': 'Japan',
          'Korea': 'Korea',
          'Quatar': 'Quatar',
          'England': 'England',
          'EEUU': 'EEUU',
          'Spain': 'Spain',
      },
      inputPlaceholder: 'Select your country',
      inputAttributes: {
          name: 'select-country'
      },
      showCancelButton: false,
      allowOutsideClick: false,
      preConfirm: (country) => {
          setSelectCountry(country)
      },
      inputValidator: (value) => {
          return new Promise((resolve) => {
              if (value === '') {
                  resolve('You need to select a country')
              } else {
                  resolve()
              }
          })
      },
  }).then((result) => {
      if (result.value) {
          Swal.close()
  }
  })

}
},[setMouseOver])

  
    const handleSubmit = async (event) => {
        event.preventDefault()
      const userData = {
        nameUser: event.target[0].value,
        lastNameUser: event.target[1].value,
        email: event.target[2].value,
        password:event.target[3].value,
        photoUser:event.target[4].value,
        country:selectCountry,
        from:"SignUpForm",
      }
const res = await dispatch(userActions.singUpUsers(userData))
console.log(res);
alerts(res)
}
  
    function handleMouseOver() {
      setMouseOver(true);
      setContador(contador+1)
    }
  
    function handleMouseOut() {
      setMouseOver(false);
      setContador(contador+1)
    }
  
    

  //   const [countries, setCountries] = React.useState([]);
  //   React.useEffect(() => {
  //     axios.get('https://restcountries.com/v3.1/all')
  //     .then(res=>{(setCountries(res.data))
  
  //   })
  // ;
  //   }, []);
  //   let country = countries.map(count=>count.name.common).sort()

    
  

    return (  
      <> 
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
        {/* <select className="input-log" required>
        <option>Country</option>
        {country.map((country,index)=>
        <option value={country} key={index}>{country}</option>
        )}
        </select> */}
       
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
        
      </div>
      <div  className="google-p">
      <GoogleSignUp selectCountry={selectCountry}/>
      </div>
      </> 
    );
  }