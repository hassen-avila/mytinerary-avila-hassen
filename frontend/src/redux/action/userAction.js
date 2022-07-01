import axios from "axios";

const userActions = {
    singUpUsers: (userData)=>{
        return async(dispatch, getState) =>{
            try{
                const res = await axios.post('http://localhost:4000/api/auth/signUp', {userData})
                console.log(res);
                dispatch({type:"SINGUPUSER", payload:{
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
            console.log(res);
            dispatch({type:"SINGINUSER", payload:{
                view: true,
                message: res.data.message,
                success: res.data.success
            }})
            return res
        }catch(error){
        console.log(error);
        }
        }
    }
}
export default userActions 