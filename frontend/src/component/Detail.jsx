import React from 'react'
import {useParams} from 'react-router-dom'
import Cities from '../data.js'
import Card from '@mui/material/Card';
import '../style/detail.css'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Details(){
    const{id}=useParams()
    console.log(id)
    let card= Cities.filter(city=> city.id === Number(id))[0]
    console.log(card);

    return(
        <div className='conteiner'>
      <Card sx={{ maxWidth: 800 }} className='card' key={card.id}>
                    <CardMedia
                    component="img"
                    height="200"
                    image={card.img}
                    alt={card.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='title-cards'>
                {card.name} - {card.country}
                </Typography>
                <Typography variant="body2" className='text-center'>
                {card.description}
                </Typography>
            </CardContent>

        
            </Card>
</div>
    )
}