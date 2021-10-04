import React, {useState} from "react";
import ButtonUser from "../ButtonUser/ButtonUser";
import {IPost} from "../../interfaces/interfaces";
import DataWrapper from "../DataWrapper/DataWrapper";
import {withStyles} from "@material-ui/styles";
import {style} from "../Arcticle/article-style";
import {Grid} from "@material-ui/core";

const MyForm = withStyles(style)(  ({ }) => {
    const [posts, setPosts] = useState<IPost[]> ([]);

    const deletePost = async (id: number) =>{
        try {
            const articleId = {
                articleId: id
            }
            const response = await fetch(`http://localhost:3001/DeletePost`, {
                method: 'Delete',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(articleId)
            })
            if (response.ok) {
                const newPost = posts.filter(post => post.id !== id)
                setPosts(newPost);
            }
        }
        catch (e){
            console.log(e)
        }
    }

     const  GetAllPosts = async  ():Promise<void> => {
            let user = localStorage.getItem("user");
            try {
               if(user) {
                   const response = await fetch(`http://localhost:3001/GetPosts?id=${JSON.parse(user).id}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8'
                            },
                        })
                        if (response.ok) {
                            const data : IPost[] = await response.json()
                            setPosts(data)
                        }
                }
            }
            catch (e){
                console.log(e)
            }
        }
    return(
       <>
            <Grid container justifyContent = {"center"} >
                <ButtonUser onClick = {GetAllPosts} subscription = {"Get Data"} />
            </Grid>
               {
                    posts.length > 0 && <DataWrapper data = {posts} deleteData = {deletePost}/>
                }
       </>
    )
})

export  default MyForm