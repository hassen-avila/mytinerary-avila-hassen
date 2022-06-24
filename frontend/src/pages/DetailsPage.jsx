import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Itinerary from '../component/Itinerary';
import {Link as LinkRouter} from "react-router-dom"
import '../style/detailsPage.css'
import {useDispatch , useSelector} from 'react-redux';
import citiesActions from '../redux/action/cityAction'
import {useParams} from 'react-router-dom';



export default function DetailsPage(){
    const {id} = useParams()
  

    const dispatch= useDispatch()
    React.useEffect(() => {
        dispatch(citiesActions.getOneCity(id))
      },[]);

      const detailsCity = useSelector(store => store.citiesReducer.city)
      return(
        <>
          <div className='conteiner'>
        <div className='card'>
            <Card sx={{ maxWidth: 800 }} className='cards' key={detailsCity._id}>
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
                <h3 className='text'>{detailsCity.description}</h3>
            </CardContent>
        
            </Card>
            </div>
        
            <Itinerary id={id}/> 
          
            <div>
            <LinkRouter to='/Cities'><div className='ov-btn-grow-skew-reverse'>Back to Cities</div>
            </LinkRouter>
            </div>
            
            </div>
           </>
            )
        }