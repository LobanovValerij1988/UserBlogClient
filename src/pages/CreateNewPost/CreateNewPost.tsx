import React from "react";
import CreateOrUpdateArticle from "../../compoments/Arcticle/CreateOrUpdateArticle";

 const CreateNewPost = ({ })   => {
    const createPost = async (formData: FormData)=>{
           const response = await fetch(`${process.env.REACT_APP_HOST_NAME}/SavePost`, {
                 method: 'POST',
                 body: formData
             })
             if (response.ok) {
                 console.log("post  was saved")
             }
     }
    return  <CreateOrUpdateArticle submitHandler = {createPost} picture = {null}/>
}

export  default CreateNewPost