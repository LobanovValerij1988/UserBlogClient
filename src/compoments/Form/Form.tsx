import React, {useContext} from "react";
import ButtonUser from "../ButtonUser/ButtonUser";
import {IPost} from "../../interfaces/interfaces";
import DataWrapper from "../DataWrapper/DataWrapper";
import {Grid} from "@material-ui/core";
import {PostManager} from "../App/App";

const MyForm = () => {
   const postManager = useContext(PostManager)

   const showData = () =>{
        if(postManager.posts?.length){
            return <DataWrapper data = {postManager.posts} />
        }
   }

   const  GetAllPosts = async  ():Promise<void> => {
            let user = localStorage.getItem("user");

            try {
               if(user) {
                   const response = await fetch(`${process.env.REACT_APP_HOST_NAME}/GetPosts?id=${JSON.parse(user).id}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8'
                            },
                        })
                        if (response.ok) {
                            const data : IPost[] = await response.json()
                            postManager.setPosts(data)
                        }
                }
            }
            catch (e){
                postManager.setPosts(undefined);
                console.log(e)
            }
        }
    return(
       <>
            <Grid container justifyContent = {"center"} >
                <ButtonUser onClick = {GetAllPosts} subscription = {"Get Data"} />
            </Grid>
               { showData() }
       </>
    )
}

export  default MyForm