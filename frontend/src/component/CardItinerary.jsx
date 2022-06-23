import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tags from '../component/Tags'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import '../style/detailsPage.css'

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
         <CardHeader
          avatar={
            <CardMedia
                    className='image-user'
                    component="img"
                    image={card.userImage}
                    alt={card.user}
            />
          }
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          title={card.user}
          subheader={card.city.name}
        />    
        <h1>{card.itinerary}</h1>
        <CardContent>
        <div>
          <p>Price: {iconCash.repeat(card.price)}</p>
        </div>
        <Tags tags={card.tags} key={card._id} /> 
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
            <ExpandMoreIcon className='more'/>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className='itinerary'>IN CONSTRUCTION</div>
          </CardContent>
        </Collapse>
      </Card>
      </div>
    )
}