import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../style/cardCity.css'
import Cities from '../data.js'


export default function CardCity() {
    return (
        <div className='card-city'>
        {Cities.map(city=>
      
            <Card sx={{ maxWidth: 800 }} className='card'>
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
                <Typography variant="body2" color="text.secondary">
                {city.description}
                </Typography>
            </CardContent>
            <CardActions>
            <Button className='button' size="small">More information</Button>
            </CardActions>
        
            </Card>
      )}
      </div>
      )}
  