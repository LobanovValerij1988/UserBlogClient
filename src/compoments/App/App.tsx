import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SignInPage from "../../pages/SignInPage/SignInPage";
import {IPost, IUser} from "../../interfaces/interfaces";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import SomethingElse from "../../pages/SomethingElse/SomethingElse";
import CreateNewPosts from "../../pages/CreateNewPost/CreateNewPost";
import GetAllPosts from "../../pages/GetAllPosts/GetAllPosts";

export const UserRegistered = React.createContext<(user:IUser | null)=>void>((user:IUser | null )=>{})

const App = ({}) =>{
    const [posts, setPosts] = useState<IPost[]> ([]);
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
                   <Route exact path = {"/"}>
                   <GetAllPosts posts={posts} setPosts = {setPosts}/>
                   </Route>
                   <Route exact path = {"/somethingelse"} component = {SomethingElse} />
                   <Route exact path = {"/createNewPost"}  component = {CreateNewPosts}/>
               </UserRegistered.Provider>
            </Router>
         </>
    )
}

export default App;