const initialState ={
    singUp:[],
    singIn:[]
   }
   const userReducer=( state = initialState, action) =>{
   switch (action.type){
   case "SINGUPUSER":
               return{
                   ...state,
                   singUp: action.payload,
               }
   case "SINGINUSER":
               return{
                   ...state,
                   singIn: action.payload,
               }
   default:
               return state  
       }
       
   }
   export default userReducer