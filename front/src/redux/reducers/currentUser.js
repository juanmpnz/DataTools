import { LOGIN } from "../constants"

const initialState = {}

function currentUserReducer(state = initialState, action){
    switch (action.type){
        case LOGIN:
        return action.payload
        default:
        return state
    }
}

export default currentUserReducer
