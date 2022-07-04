const initialState ={
    user: null,
    userData:[],
   }


   const userReducer=( state = initialState, action) =>{
   switch (action.type){
    case "USER":{
                return{
                    ...state,
                    user: action.payload,
                    userData:action.payload,
                }
    }
    case "MESSAGE":{
        return{
            ...state,
            user: action.payload,
            
        }
    }
   default:
               return state  
       }
       
   }
   export default userReducer