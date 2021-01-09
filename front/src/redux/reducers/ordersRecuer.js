import { SET_ORDER } from "../constants"

const initialState = {}

function ordersReducer(state = initialState, action){
    switch (action.type){
        case SET_ORDER:
        return action.payload
        default:
        return state
    }
}

export default ordersReducer
