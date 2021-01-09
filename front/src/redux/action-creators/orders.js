import axios from "axios"
import { SET_ORDER } from "../constants"


const setOrder = (orderData)=>({type: SET_ORDER, payload: orderData})

export const addOrder = (order) => async (dispatch)=>{
    try{
      const ord = await axios.post("/api/orders/add",order)
      dispatch(setOrder(ord.data))
    }catch(err){
      return "err"
    }
    
}


/* 
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

} */