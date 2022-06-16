import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Card from '@mui/material/Card';
import '../style/detail.css'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link as LinkRouter} from "react-router-dom"


export default function Details(){
    const [detailsCity, setDetailsCity] = React.useState([]);
    const{id}=useParams()
    
    React.useEffect(() => {
        axios.get(`http://localhost:4000/api/cities/${id}`)
        .then(res=>(setDetailsCity(res.data.response.city)))
      },[id]);
      
    return(
        
        <div className='conteiner'>
            {detailsCity &&
       <Card sx={{ maxWidth: 800 }} className='card' key={detailsCity._id}>
                    <CardMedia
                    component="img"
                    height="200"
                    image={detailsCity.image}
                    alt={detailsCity.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='title-cards'>
                {detailsCity.name} - {detailsCity.country}
                </Typography>
                <Typography variant="body2" className='text-center'>
                {detailsCity.description}
                </Typography>
                <h1 className='detail-text'>Under Construction</h1> 
            </CardContent>
            
        
            </Card> 
            
            }
            <LinkRouter to='/Cities'><div className='ov-btn-grow-skew-reverse'>Back to Cities</div>
            </LinkRouter>
</div>
    )
}