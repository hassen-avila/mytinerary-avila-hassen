import axios from "axios";

let urlMyTin = 'https://mytinerary-hassen.herokuapp.com/'
//let urlMyTin ='http://localhost:4000/'


const userActions = {
    singUpUsers: (userData)=>{
        return async(dispatch, getState) =>{
            try{
                const res = await axios.post('http://localhost:4000/api/auth/signUp', {userData})
                dispatch({type:"MESSAGE", payload:{
                    view: true,
                    message: res.data.message,
                    success: res.data.success,
                    from: res.data.from,}})
                    return res
                    
            }catch(error){
                console.log(error);
            }
            
        }
        
    },
    signInUser:(userLog)=>{
        return async(dispatch, getState) =>{
            try{
            const res = await axios.post(`http://localhost:4000/api/auth/signIn`,{userLog})
            if(res.data.success){
                localStorage.setItem('token', res.data.response.token)
                dispatch({type: 'USER', payload: res.data.response.userData})
            }
            dispatch({type:'MESSAGE', payload:{
                view: true,
                message: res.data.message,
                success: res.data.success,
            }})
            return res
        }catch(error){
        console.log(error);
        }
        }
    },
    signOutUser:() => {
        return async (dispatch, getState) =>{
            localStorage.removeItem('token')
            dispatch({type:'USER', payload:null})
        }
    },
   
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            const user = await axios.get("http://localhost:4000/api/loginToken", {headers: {'Authorization': 'Bearer '+token}} )
            .then(user => {
                if (user.data.success) {
                    dispatch({
                        type: 'USER',
                        payload: user.data.response
                    })
                    dispatch({
                        type: 'MESSAGE',
                        payload: {
                            view: true,
                            message: user.data.message,
                            success: user.data.success,
                        }
                    })
                } else {
                    localStorage.removeItem('token')
                }
            })
            .catch(error => {
                console.log(error.response.status)
                if (error.response.status === 401)
                    dispatch({
                        type: 'MESSAGE',
                        payload: {
                            view: true,
                            message: "Sesion expired, please, log in again.",
                            success: false
                        }
                    })
                localStorage.removeItem('token')
            })
        }
    }
}
export default userActions 