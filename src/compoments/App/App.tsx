import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SignInPage from "../../pages/SignInPage/SignInPage";
import MyForm from "../Form/Form";
import {IUser} from "../../interfaces/interfaces";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import SomethingElse from "../../pages/SomethingElse/SomethingElse";
import CreateNewPosts from "../../pages/CreateNewPost/CreateNewPost";

export const UserRegistered = React.createContext<(user:IUser | null)=>void>((user:IUser | null )=>{})

const App = ({}) =>{
    const [user, setUser] = useState <IUser | null> (null);

    useEffect(() => {
    let registeredUser = localStorage.getItem("user")
        if(registeredUser){
            setUser(JSON.parse(registeredUser))
        }
    },[])

    if(!user){
        return  <SignInPage setUser = {setUser} />
    }

    return(
        <>
            <Router >
               <UserRegistered.Provider value = {setUser}>
                   <NavigationMenu/>
                   <Route exact path = {"/"} component = {MyForm}/>
                   <Route exact path = {"/somethingelse"} component = {SomethingElse}/>
                   <Route exact path = {"/createNewPost"} component = {CreateNewPosts}/>
               </UserRegistered.Provider>
            </Router>
         </>
    )
}

export default App;