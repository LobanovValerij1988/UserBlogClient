import React, {useState} from "react";
import ButtonUser from "../ButtonUser/ButtonUser";
import {IPost} from "../../interfaces/interfaces";
import DataWrapper from "../DataWrapper/DataWrapper";
import {withStyles} from "@material-ui/styles";
import {style} from "../Arcticle/article-style";
import {Grid} from "@material-ui/core";

const MyForm = withStyles(style)(  ({ }) => {

        const [posts, setPosts] = useState<IPost[]> ([]);
        const  GetAllUsers = async  ():Promise<void> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if (response.ok) {
                const data : IPost[] = await response.json()
                setPosts(data)
            }
        }

    return(
       <>
            <Grid container justifyContent = {"center"} >
                <ButtonUser onClick = {GetAllUsers} subscription = {"Get Data"} />
            </Grid>
               {
                    posts.length > 0 && <DataWrapper data = {posts}/>
                }
       </>
    )
})

export  default MyForm