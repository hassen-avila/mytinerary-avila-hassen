import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import '../style/detailsPage.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { Avatar } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    const [detailsCity, setDetailsCity] = React.useState([]);
    const{id}=useParams()
    
    React.useEffect(() => {
        axios.get(`http://localhost:4000/api/cities/${id}`)
        .then(res=>(setDetailsCity(res.data.response.city)))
      },[id]);

      const [itinerary, setItinerary] = React.useState([]);
      React.useEffect(() => {
        axios.get(`http://localhost:4000/api/itinerary`)
        .then(res=>(setItinerary(res.data.response)))
      },[id]);
      console.log(itinerary)
      
      const [expanded, setExpanded] = React.useState(false);

      const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return(
        <div className='card'>
        {itinerary.map(card=>
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
        <CardActions disableSpacing className='more'>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />{card.like}
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon  />
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