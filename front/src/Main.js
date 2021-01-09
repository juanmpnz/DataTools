import React, {useEffect} from "react"
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
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

import {setUser} from "./redux/action-creators/users"

function Main({  history,location }) {
   const dispatch = useDispatch()
   const path = location.pathname;

  useEffect(()=>{
    //refactorear
   return axios
   .get("/api/users/me", {
     withCredentials: true,
     headers: { "Content-Type": "application/json" },
   })
   .then((res) =>{ dispatch(setUser(res.data));    console.log(res);})
   .catch((res) => {
    
      if(path !== "/register"){
         history.push("/login") 
      }
 
   } );}, [])
  
  return (
     <>
        {path === "/login" || path ===  "/register"  ? null : <NavContainer />}  
        <div className="container">      
        {path === "/login"  || path === "/register" ? null :<AddContainer />}   
        <Switch>
        <Route exact path="/" component={DataTables}></Route>
        <Route path="/login" component={LoginContainer}></Route> 
        <Route path="/register" component={RegisterContainer}></Route> 
        <Route path="/update" component={UpdateContainer}></Route>
        <Route path="/*" component={NotFound} />
        </Switch>
        </div>  
        {path === "/login" || path ===  "/register" ? null : <> <Footer/> </> }     
     </>
  )
}

export default Main;
