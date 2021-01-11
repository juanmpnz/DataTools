import axios from "axios"
import { SET_ORDER } from "../constants"


const setOrder = (orderData)=>({type: SET_ORDER, payload: orderData})

export const orderUpdate = (order) => axios.put("/api/orders/update", order).then((res)=>res)

export const addOrder = (order) => async (dispatch)=>{
    try{
      const ord = await axios.post("/api/orders/add",order)
      dispatch(setOrder(ord.data))
    }catch(err){
      return "err"
    }
    
}

 
