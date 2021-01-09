import { combineReducers } from "redux"
import currentUserReducer from "./currentUser"
import ordersReducer from "./ordersRecuer"

export default combineReducers({
  currentUser: currentUserReducer,
  orders : ordersReducer,
})
