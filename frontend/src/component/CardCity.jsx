import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../style/cardCity.css'
import '../App.css'
import Cities from '../data.js'





export default function CardCity() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  console.log(searchTerm);
  React.useEffect(() => {
    let results = Cities.filter(city =>
      city.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
  
    return (
    <div className='card-city'>
      <input
        type="text"
        placeholder="Search for a particular city..."
        value={searchTerm}
        onChange={handleChange}
        className="input-search"
      />
        
        {
        
        searchResults.map(city=>
      
            <Card sx={{ maxWidth: 800 }} className='card' key={city.id}>
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
                <Typography variant="body2" className='text-center'>
                {city.description}
                </Typography>
            </CardContent>
            <CardActions>
            <Button className='button' size="small">More information</Button>
            </CardActions>
        
            </Card>
      )
      }
      </div>
      )}
  