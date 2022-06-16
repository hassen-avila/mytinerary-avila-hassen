import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link as LinkRouter} from "react-router-dom"
import '../style/cardCity.css'
import '../App.css'



export default function CardCity(props) {

let card= props.cityFilter
    return (
    <div className='card-city'>   
         {
        
        card.map(city=>
      
            <Card sx={{ maxWidth: 800 }} className='card' key={city._id}>
                    <CardMedia
                    component="img"
                    height="200"
                    image={city.image}
                    alt={city.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='title-cards'>
                {city.name} - {city.country}
                </Typography>
            </CardContent>
            <CardActions>
            <LinkRouter to={`/city/${city._id}`}><div className='ov-btn-grow-skew-reverse'>More Information</div></LinkRouter>
            </CardActions>
        
            </Card>
      )
      }  
      </div>
      )}
  