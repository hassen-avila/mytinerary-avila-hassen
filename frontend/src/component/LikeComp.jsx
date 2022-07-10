import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import itinerariesActions from '../redux/action/itineraryAction';
import Typography from '@mui/material/Typography';

export default function LikeComp({card}){
    const dispatch = useDispatch()
    const [likes,setLikes] = useState(card.like)

    const [reload,setReload] = useState(false)

    async function toLike() {
        const res= await dispatch(itinerariesActions.likeDislike(card._id))
            setLikes(res.data.response)
            setReload(!reload)
            return res
         }

    const user=useSelector(store=>store.userReducer.user)
    
    

    return(
        <>
        {user ?
            <IconButton onClick={toLike} aria-label="cart">
            {likes?.includes(user.id) ?
                <FavoriteIcon/> :
                <FavoriteBorderIcon/>}
                <Typography sx={{color: 'black', paddingLeft: '5px'}}>{likes?.length} likes</Typography>
            </IconButton> :
            <IconButton aria-label="cart">
                <FavoriteBorderIcon/>
                <Typography sx={{color: 'black', paddingLeft: '5px'}}>{likes?.length} likes</Typography>
            </IconButton>
        }
        </>
    )
}