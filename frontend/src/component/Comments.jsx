import '../style/comment.css'
import AddCommentIcon from '@mui/icons-material/AddComment';
import itinerariesActions from '../redux/action/itineraryAction';
import { useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Swal from 'sweetalert2';
import '../style/detailsPage.css'


export default function Comments({card}){
    const dispatch=useDispatch()
    const [inputText, setInputText]=useState("")  
    const [reload, setReload]=useState(false)
    const [idDelete, setIdDelete]=useState("")
    const [modify, setModify]=useState("")
    const [comment, setComments]=useState(card.comments)
    const user= useSelector(store => {return store.userReducer.user})

    

    
    useEffect(()  =>{
        dispatch(itinerariesActions.getOneItinerary(card._id))
        
    },[reload])
    
    const itineraries= useSelector(store => {return store.itineraryReducer.getOneItinerary})
    const userState = useSelector(store=>store.userReducer.user)   

    



    async function toAdd(event){
        event.preventDefault();
        const  commentaries = { 
             userId: card._id,
             comment:inputText, 
            };

            const res = await dispatch(itinerariesActions.addComment(commentaries));
            Swal.fire({
                title: `Comment created`,
                text:  'Now its time to visit other cities!!',
              })
            setComments(res.data.response)
            setInputText("");
    }

    async function toDelete(id){
        const res = await dispatch(itinerariesActions.deleteComment(id))
        setComments(res.data.response)
        Swal.fire({
            title: `Comment deleted`,
            text:  'Have a nice day!!',
          })
    }

    async function toModify(id){
        await Swal.fire({
            title: 'Add your modify comment',
            input: 'text',
            
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Modify',
            showLoaderOnConfirm: true,
            
            allowOutsideClick: ()  =>  !Swal.isLoading()
          }).then((result) => {
               

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
  

    async function modifyComment(id, value) {
        const comments= {
                comment: value,
                userId: id
            }
        
        let res= await dispatch(itinerariesActions.modifyComment(comments))

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
                {userState ? (
                    res.userId._id===userState.id ? (<div className='actions-del'>
                    <button onClick={()=>toDelete(res._id)} >
                    <DeleteForeverIcon />
                        </button> 
                        <button onClick={()=>toModify(res._id)} >
                    <ModeEditIcon/>
                    </button>
                    </div>):(<div></div>)
                    
                ):(<div></div>) }
                
            </div> 
            )}</div>
            
                {userState ? (
                    <div className='add-comment-input' >
                    <input className='imput-comment' type="text-area" placeholder='Add your comment!!' value={inputText} onChange={(event) => setInputText(event.target.value)} />
                    <button type="submit" onClick={toAdd}>
                    <AddCommentIcon/>
                    </button>     
                    </div>
                ) : (
                    <div className='notFound'>If you want comment or give like, login!</div>
                ) }
            
            
        </>
    )
}