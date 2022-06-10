import '../style/title.css';
import React from "react";
import '../App.css'

function Title(){
    return(
    <div className='title-box'>
        <div>
            <h1 className='title-style' >MyTinerary</h1>
            <p className='slogan'><b>Find your perfect trip, designed by insiders who know and love their cities!</b></p>
        </div>
    </div>
    )
}
export default Title;