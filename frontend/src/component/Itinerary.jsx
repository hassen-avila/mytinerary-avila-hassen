import React from 'react'
import {useParams} from 'react-router-dom'

import '../style/detailsPage.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';

import FavoriteIcon from '@mui/icons-material/Favorite';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {useSelector, useDispatch} from 'react-redux';
import itineraryActions from '../redux/action/itineraryAction'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


export default function Itinerary(){
      const dispatch = useDispatch()
      const citiesFilter= useSelector(store => store.itineraryReducer.cities)
      console.log(citiesFilter);
      
      const [expanded, setExpanded] = React.useState(false);
      
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };

      React.useEffect(()=>{
        dispatch(itineraryActions.getOneItinerary())
      },[])

    return(
        <div className='card'>
        {citiesFilter.map(card=>
        <Card className='cards' key={card._id}>
         <CardHeader
          avatar={
            <CardMedia
                    component="img"
                    height="100"
                    image={card.userImage}
                    alt={card.user}
            />
          }
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          title={card.user}
          subheader={card.city}
          
        />
        <div>
          <p>{}</p>
        </div>
        <CardContent>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />{card.like}
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className='more' />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className='itinerary'>Itinerary 1</div>
          </CardContent>
        </Collapse>
      </Card>
      )}
    
            
            
            
</div>
    )
}