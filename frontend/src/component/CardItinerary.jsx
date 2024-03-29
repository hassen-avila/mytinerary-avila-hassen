import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tags from '../component/Tags'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import '../style/detailsPage.css'
import Activity from './Activity';
import LikeComp from '../component/LikeComp'
import Typography from '@mui/material/Typography';
import Comments from '../component/Comments'

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

export default function CardItinerary({card}){


    const [expanded, setExpanded] = React.useState(false);
    let iconCash="💵 "
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return(
        <div className='card' key={card._id}>
        <Card className='cards'>
        <div className='header-card'>
        <div>
         <CardHeader 
          avatar={
            <CardMedia
                    
                    className='image-user'
                    component="img"
                    image={card.userImage}
                    alt={card.user}
            />
          }
        /> 
        </div>
        <div className='text-header'>
          <p>{card.user}</p>
          <p className='text-city-name'>City: {card.city.name}</p>
        </div>
        </div>
        <div className='title-itinerary'><h1>{card.itinerary}</h1></div>   
        
        <CardContent className='card-content'>
        
        <div>
          <p>Price: {iconCash.repeat(card.price)} - Duration: {card.duration} hrs.</p>
        </div>
        <Tags tags={card.tags} key={card._id} /> 
        </CardContent>
        <CardActions disableSpacing className='action-card'>

          <LikeComp card={card}/>
          
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className='more'/>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant='h6' sx={{ color: 'black', textAlign:'center', background:'white'}}>
              ACTIVITIES
            </Typography>
            <div className='itinerary'>
            <Activity id={card._id} />
            </div>
            <Typography variant='h6' sx={{ color: 'black', textAlign:'center', background:'white'}}>
              COMMENTS
            </Typography>
            <Comments card={card}/>
          </CardContent>
        </Collapse>
      </Card>
      </div>
    )
}