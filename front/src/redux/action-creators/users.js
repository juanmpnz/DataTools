//constants
import {
 LOGIN,
} from '../constants'

import axios from 'axios'

export const setUser = (userData)=>({type: LOGIN, payload: userData})

export const registerUser = (user) => axios.post("/api/users/register", user)

export const login = ({email,password}) => async (dispatch)=>{
    try{
      const user = await axios.post("/api/users/login", {email, password})
      dispatch(setUser(user.data))
    }catch(err){
      return "err"
    }
    
}




