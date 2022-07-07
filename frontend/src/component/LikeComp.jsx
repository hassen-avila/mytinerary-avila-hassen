import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';


export default function LikeComp(card){

    return(
        <IconButton aria-label="add to favorites">
        <FavoriteIcon />{card.like}
        </IconButton>
    )
}