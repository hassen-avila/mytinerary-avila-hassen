import React from 'react'
import '../style/detailsPage.css'
import {useSelector, useDispatch} from 'react-redux';
import activitiesActions from '../redux/action/activityAction'
import CardActivity from './CardActivity';
import NotFound from './NotFound'

export default function Activity({id}){
    const [activities,SetActivities]=React.useState([])
      const dispatch = useDispatch()


      

      React.useEffect(()=>{
        async function activitiesC(){
           let pedro= await dispatch(activitiesActions.findActivityFromItinerary(id))
           SetActivities(pedro.data.response.info)
        }
        activitiesC()
      },[id])

      console.log(activities);

    return(
        <>
        {activities.length>0 ? (activities.map(card=>
          <div className='card' key={card.nameActivity} >
            <CardActivity card={card}/> 
          </div>)):(<NotFound/>)}
        </>
        
    )
}