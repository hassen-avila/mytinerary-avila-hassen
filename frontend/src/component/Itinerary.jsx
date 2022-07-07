import React from 'react'
import '../style/detailsPage.css'

import {useSelector, useDispatch} from 'react-redux';
import itinerariesActions from '../redux/action/itineraryAction'
import CardItinerary from './CardItinerary';
import NotFound from './NotFound'

export default function Itinerary({id}){

      const dispatch = useDispatch()
      const itineraries= useSelector(store => {return store.itineraryReducer.itineraries})

      

      React.useEffect(()=>{
        dispatch(itinerariesActions.getItinerariesFromCity(id))
      },[id])



    return(
        <>
        {itineraries.length>0 ? (itineraries.map(card=>
          <div className='card' key={card.itinerary} >
            <CardItinerary key={card.itinerary}  card={card}/> 
          </div>)):(<NotFound/>)}
  
        </>
        
    )
}