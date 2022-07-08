import '../style/comment.css'
import AddCommentIcon from '@mui/icons-material/AddComment';
import itinerariesActions from '../redux/action/itineraryAction';
import { useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Swal from 'sweetalert2'


export default function Comments({card}){
    const dispatch=useDispatch()
    const [inputText, setInputText]=useState("")  
    const [reload, setReload]=useState(false)
    const [idDelete, setIdDelete]=useState("")
    const [modify, setModify]=useState("")
    const [comment, setComments]=useState(card.comments)
    const user= useSelector(store => {return store.userReducer.user})
    // let comment=card.comments;
    
    console.log(card.comments);
    
    useEffect(()  =>{
        dispatch(itinerariesActions.getOneItinerary(card._id))
        .then((res)=>console.log(res))
        
    },[reload])
    
    const itineraries= useSelector(store => {return store.itineraryReducer.getOneItinerary})
       
    
    

    console.log(comment);

    async function toAdd(event){
        event.preventDefault();
        const  commentaries = { 
             userId: card._id,
             comment:inputText, 
            };
            console.log(commentaries);
            const res = await dispatch(itinerariesActions.addComment(commentaries));
            
            setComments(res.data.response)
            setInputText("");
    }

    async function toDelete(id){
        const res = await dispatch(itinerariesActions.deleteComment(id))
        setComments(res.data.response)
        console.log(res)
    }

    async function toModify(id){
        await Swal.fire({
            title: 'Add your modify comment',
            input: 'text',
            
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            
            allowOutsideClick: ()  =>  !Swal.isLoading()
          }).then((result) => {
               
             console.log(result.value) 
            if (result.isConfirmed) {
              Swal.fire({
                title: `Success`,
              })
            }
            setModify(result.value)
            modifyComment(id, result.value)
          } 
          )
    }
          console.log(modify)

    async function modifyComment(id, value) {
        const comments= {
                comment: value,
                userId: id
            }
        
        let res= await dispatch(itinerariesActions.modifyComment(comments))
        console.log(res);
        setComments(res)
    }

    return(
        <>
        <div>{comment?.map((res,index)=>
            
            <div key={index} className='comment-conteiner'>
                <div>
                    <img className='image-comment' src={res.userId.photoUser} alt={res.userId.nameUser} />
                </div>
                <div className='text-comment'>
                    <div className='name-comment'>{res.userId.nameUser}</div>
                    <div className='email-comment'>{res.userId.email}</div>
                    <div className='comment'>{res.comment}</div>
                </div> 
                <div className='actions-del'>
               
                <button onClick={()=>toDelete(res._id)} >
                <DeleteForeverIcon />
                    </button> 
                    <button onClick={()=>toModify(res._id)} >
                <ModeEditIcon/>
                </button>
                </div>
            </div> 
            )}</div>

            <div className='add-comment-input' >
                    <input className='imput-comment' type="text-area" placeholder='Add your comment!!' value={inputText} onChange={(event) => setInputText(event.target.value)} />
                    <button type="submit" onClick={toAdd}>
                    <AddCommentIcon/>
                    </button>     
            </div>
        </>
    )
}