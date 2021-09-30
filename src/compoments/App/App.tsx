import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SignInPage from "../../pages/SignInPage/SignInPage";
import MyForm from "../Form/Form";
import {IUser} from "../../interfaces/interfaces";


const App = ({}) =>{
    const [user, setUser] = useState <IUser | null> (null);

    if(!user){
        return  <SignInPage setUser = {setUser} />
    }

    return(
        <>
            <Router >
               <Route exact path = {"/"}>
                    <MyForm />
                </Route>
            </Router>
         </>
    )
}

export default App;