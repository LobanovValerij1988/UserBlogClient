import React from "react";
import CreateOrUpdateArticle from "../../compoments/Arcticle/CreateOrUpdateArticle";

 const CreateNewPost = ({ })   => {
    const createPost = async (articleId: number | null ,userId:number, article:string,  body:string )=>{
             const savedArticle = {
                 articleId: articleId,
                 title: article,
                 articleContent: body,
                 userId: userId
             }
             const response = await fetch('http://localhost:3001/SavePost', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json;charset=utf-8'
                 },
                 body: JSON.stringify(savedArticle)
             })
             if (response.ok) {
                 console.log("post  was saved")
             }
     }
    return  <CreateOrUpdateArticle submitHandler = {createPost}/>
}

export  default CreateNewPost