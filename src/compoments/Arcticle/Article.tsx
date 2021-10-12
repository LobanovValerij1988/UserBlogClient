import React, {useState} from "react";
import {withStyles} from "@material-ui/styles";
import {style} from "./article-style"
import CreateOrUpdateArticle from "./CreateOrUpdateArticle";
import ShowArticle from "./ShowArticle";
import {IArticle} from "../../interfaces/interfaces";

const Article = withStyles(style)( ({classes, title, body, id, deleteArticle,picture}: IArticle) => {
     const [isUpdateArticle, setIsUpdateArticle] = useState<boolean>(false)
     const [currentTitle, setCurrentTitle] = useState<string>(title)
     const [currentBody, setCurrentBody] = useState<string>(body)

    const updatePost = async (formData: FormData) => {
       const response = await fetch(`${process.env.REACT_APP_HOST_NAME}/PostUpdate`, {
            method: 'PUT',
            body: formData
        })
        if (response.ok) {
            const newTitle= formData.get("title") || "";
            setCurrentTitle(newTitle.toString())
            const newBody = formData.get("articleContent")  || ""
            setCurrentBody(newBody.toString())
        }
    }

     return(
        <>
             { isUpdateArticle ?
                 <CreateOrUpdateArticle isUpdate = {true}
                                        initiallyTitle = {currentTitle}
                                        initiallyBody = {currentBody}
                                        buttonBackHandler = {setIsUpdateArticle}
                                        submitHandler = {updatePost}
                                        articleId = {id.toString()}
                                        picture = {picture}
                 />  :
                 <ShowArticle body = {currentBody}
                              title = {currentTitle}
                              id ={id} deleteArticle = {deleteArticle}
                              updateArticleHandle = {setIsUpdateArticle}
                              picture = {picture}
                 />
             }
        </>
    )
})

export  default Article