import React, {useContext} from "react";
import CreateOrUpdateArticle from "../../compoments/Arcticle/CreateOrUpdateArticle";
import {IPost} from "../../interfaces/interfaces";
import {PostManager} from "../../compoments/App/App";

 const CreateNewPost = ({ })   => {
     const postManager = useContext(PostManager)
     const createPost = async (formData: FormData)=>{
           const response = await fetch(`${process.env.REACT_APP_HOST_NAME}/SavePost`, {
                 method: 'POST',
                 body: formData
             })
             if (response.ok) {
                 const savedPost : IPost = await response.json()
                 postManager.posts?.push(savedPost);
                 postManager.setPosts(postManager.posts)
                 console.log("post  was saved")
             }
     }
    return  <CreateOrUpdateArticle submitHandler = {createPost} picture = {null}/>
}

export  default CreateNewPost