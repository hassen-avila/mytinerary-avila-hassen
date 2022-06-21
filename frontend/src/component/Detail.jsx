import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import '../style/detail.css'
import {Link as LinkRouter} from "react-router-dom"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
//import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

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



export default function Details(){
    const [detailsCity, setDetailsCity] = React.useState([]);
    const{id}=useParams()
    
    React.useEffect(() => {
        axios.get(`http://localhost:4000/api/cities/${id}`)
        .then(res=>(setDetailsCity(res.data.response.city)))
      },[id]);
      
      const [expanded, setExpanded] = React.useState(false);

      const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return(
        <div className='conteiner'>
        
        <Card className='card'>
        {/* <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        /> */}
        <CardMedia
          component="img"
          height="300"
          image={detailsCity.image}
          alt={detailsCity.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {detailsCity.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className='itinerary'>Itinerary 1</div>
            <div className='itinerary'>Itinerary 2</div>
            <div className='itinerary'>Itinerary 3</div>
          </CardContent>
        </Collapse>
      </Card>
      
    
            
            
            <LinkRouter to='/Cities'><div className='ov-btn-grow-skew-reverse'>Back to Cities</div>
            </LinkRouter>
</div>
    )
}