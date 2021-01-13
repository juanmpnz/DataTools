import React, {useEffect} from "react"
import { Route, Switch ,useHistory} from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import axios from "axios"

//COMPONENTS
import NavContainer from "./containers/NavContainer"
import AddContainer from "./containers/AddConteiner"
import Footer from "./components/Footer"
import LoginContainer from "./containers/LoginContainer"
import RegisterContainer from "./containers/RegisterContainer"
import DataTables from "./containers/DataTables"
import UpdateContainer from "./containers/UpdateContainer"
import NotFound from "./utils/404";
import MyToolsContainer from "./containers/MyToolsContainer"

import {setUser} from "./redux/action-creators/users"
import ShowContainer from "./containers/ShowContainer";

function Main({  location }) {
  
   const dispatch = useDispatch()
   const currentUser = useSelector((state) => state.currentUser);
   const history = useHistory()
   const path = location.pathname;

  useEffect(()=>{
    //refactorear
   return axios
   .get("/api/users/me", {
     withCredentials: true,
     headers: { "Content-Type": "application/json" },
   })
   .then((res) =>{ dispatch(setUser(res.data)); })
   .catch((err) => {
   history.push("/login")
   } );}, [])
   

  return (
     <>
  
        {path === "/login" || path ===  "/register"  ? null : <NavContainer />}  
        <div className="container">      
        {path === "/login"  || path === "/register" || currentUser.id === undefined ?null : <AddContainer />}  

        <Switch>
        <Route exact path="/" component={DataTables}></Route>
        <Route path="/login" component={LoginContainer}></Route> 
        <Route path="/mytools" component={MyToolsContainer}></Route> 
        <Route path="/register" component={RegisterContainer}></Route> 
        <Route path="/update" component={UpdateContainer}></Route>
        <Route path="/show/:id" component={ShowContainer}></Route>
        <Route path="/*" component={NotFound} />
        </Switch>
        </div>  
        {path === "/login" || path ===  "/register" ? null : <> <Footer/> </> }     
     </>
  )
}

export default Main;
