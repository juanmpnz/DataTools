import React from "react"
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import Menu from "./components/Nav"
import AddContainer from "./containers/AddConteiner"
import Footer from "./components/Footer"
import Login from "./components/Login"
import DataTables from "./containers/DataTables"
import UpdateContainer from "./containers/UpdateContainer"
import NotFound from "./utils/404";

function Main({ location }) {
const path = location.pathname;
  return (
     <>
        {path === "/login" ? null : <Menu />}  
        <div className="container">      
        {path === "/login" ? null :<AddContainer />}   
        <Switch>
        <Route exact path="/" component={DataTables}></Route>
        <Route path="/login" component={Login}></Route> 
        <Route path="/update/:id" component={UpdateContainer}></Route>
        <Route path="/*" component={NotFound} />
        </Switch>
        </div>  
        {path === "/login" ? null : <> <Footer/> </> }     
     </>
  )
}

export default Main;
