//constants
import {
 LOGIN,
 LOGOUT
} from '../constants'

import axios from 'axios'

export const setUser = (userData)=>({type: LOGIN, payload: userData})
export const setLogout = () => (dispatch) => {
  return dispatch({ type: LOGOUT, payload: {} })
}
export const registerUser = (user) => axios.post("/api/users/register", user)

export const login = ({email,password}) => async (dispatch)=>{
    try{
      const user = await axios.post("/api/users/login", {email, password})
      dispatch(setUser(user.data))
    }catch(err){
      return "err"
    }
    
}

export const logout = () => async (dispatch)=>{
  try{
    const user = await axios.post("/api/users/logout")
    dispatch(setLogout(user.data))
  }catch(err){
    return "err"
  }
  
}






