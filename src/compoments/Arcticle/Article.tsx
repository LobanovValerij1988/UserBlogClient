import React, {useContext, useState} from "react";
import {withStyles} from "@material-ui/styles";
import {style} from "./article-style"
import CreateOrUpdateArticle from "./CreateOrUpdateArticle";
import ShowArticle from "./ShowArticle";
import {IArticle, IPost} from "../../interfaces/interfaces";

const Article = withStyles(style)( ({classes, post}: IArticle) => {
     const [isUpdateArticle, setIsUpdateArticle] = useState<boolean>(false)

     const [currentTitle, setCurrentTitle] = useState<string>(post.title)
     const [currentBody, setCurrentBody] = useState<string>(post.articleContent)
     const [picture, setCurrentPucture] = useState<string | null>(post.picture)

    const updatePost = async (formData: FormData) => {
       const response = await fetch(`${process.env.REACT_APP_HOST_NAME}/PostUpdate`, {
            method: 'PUT',
            body: formData
        })
        if (response.ok) {
            const savedPost : IPost = await response.json()
            setCurrentTitle(savedPost.title )
            setCurrentBody(savedPost.articleContent)
            setCurrentPucture(savedPost.picture)
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
                                        articleId = {post.id.toString()}
                                        picture = {picture}
                 />  :
                 <ShowArticle articleContent = {currentBody}
                              title = {currentTitle}
                              id ={post.id}
                              updateArticleHandle = {setIsUpdateArticle}
                              picture = {picture}
                 />
             }
        </>
    )
})

export  default Article