import React from 'react'
import {useParams} from 'react-router-dom'
import Cities from '../pages/Cities'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Details(){
    let card =""
    const{id}=useParams()
    card = Cities.map(card=> card.id === id)
    console.log(card)
    return(
        <>
      {Cities.map(city=>
        <Card sx={{ maxWidth: 800 }} className='card' key={city.id}>
        <CardMedia
        component="img"
        height="200"
        image={city.img}
        alt={city.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='title-cards'>
                {city.name} - {city.country}
        </Typography>
         <Typography variant="body2" className='text-center'>
         {city.description}
        </Typography>
        </CardContent>
        </Card>
      
        
      )}
</>
    )
}