import React, {useState} from "react";
import ButtonUser from "../../compoments/ButtonUser/ButtonUser";
import {withStyles} from "@material-ui/styles";
import {style} from "./SignIn-style";
import {Box} from "@material-ui/core";
import TextBox from "../../compoments/Inputs/TextBox/TextBox";
import {ISignInPage, IUser} from "../../interfaces/interfaces";

const MyForm = withStyles(style)(  ({classes ,setUser}: ISignInPage) => {
    const [name, setName] =                useState<string>("");
    const [isErrorName, setIsErrorName ] = useState<boolean>(false)

    const [password, setPassword] = useState<string>("")
    const [isErrorPassword, setIsErrorPassword ] = useState<boolean>(false)

    const  Register = async  ():Promise<void> => {
         setIsErrorName(false)
         setIsErrorPassword(false)
         let isHasError: boolean  = false;
         if(name.length === 0) {
              setIsErrorName(true)
              isHasError = true
         }
         if(password.length === 0) {
             isHasError = true
             setIsErrorPassword(true)
         }
         setTimeout(() => {
             setIsErrorName(false)
             setIsErrorPassword(false)
         },2000)
           if(!isHasError) {
             const user = {
                  name: name,
                  password: password
              }
              try {
                  const response = await fetch(`${process.env.REACT_APP_HOST_NAME}/Login`, {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json;charset=utf-8'
                      },
                      body: JSON.stringify(user)
                  })
                  if (response.ok) {
                      const user : IUser = await response.json()
                      setUser(user)
                      localStorage.setItem("user",JSON.stringify(user))
                   }
              }
              catch (e){
                  console.log(e)
              }
              finally {
                  setName("")
                  setPassword("")
              }
           }
    }

    return(
         <Box className = {classes.form} component = {"form"}
              sx = {{
                  float: "right",
                  width: "220px",
                  background: 'aliceblue',
                  '& .MuiTextField-root': { m: 1, width: '25ch', display : "block" , float: "right"},
              }}
         >
            <TextBox label = "name"
                     type = "text"
                     placeholder = "EnterYourName"
                     value = {name}
                     setValue = {setName}
                     HasError = {isErrorName}
                     ErrorMessage = "Field could not be empty"  />

            <TextBox
                     HasError = {isErrorPassword}
                     ErrorMessage = "Field could not be empty"
                     value = {password}
                     setValue = {setPassword}
                     label = "Password"
                     placeholder = {"Enter your password"}
                     type = {"password"}
            />

             <ButtonUser onClick = {Register} subscription = {"Sign In"} />
         </Box>
    )
})
export  default MyForm