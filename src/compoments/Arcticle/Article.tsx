import React, {useState} from "react";
import {WithStyles, withStyles} from "@material-ui/styles";
import {style} from "./article-style"
import CreateOrUpdateArticle from "./CreateOrUpdateArticle";
import ShowArticle from "./ShowArticle";

export  interface  IArticle extends WithStyles<typeof style>{
    title: string;
    body:  string;
    id:    number
    deleteArticle: (id : number) => void
}

const Article = withStyles(style)( ({classes, title, body, id, deleteArticle}: IArticle) => {
     const [isUpdateArticle, setIsUpdateArticle] = useState<boolean>(false)
     const [currentTitle, setCurrentTitle] = useState<string>(title)
     const [currentBody, setCurrentBody] = useState<string>(body)

    const updatePost = async (articleId: number | null ,userId:number, article:string,  body:string ) => {
        const updatedArticle = {
            articleId: articleId,
            title: article,
            articleContent: body,
            userId: userId
        }
        const response = await fetch('http://localhost:3001/PostUpdate', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(updatedArticle)
        })
        if (response.ok) {
            setCurrentTitle(article)
            setCurrentBody(body)
        }
    }

     return(
        <>
             { isUpdateArticle ?
                 <CreateOrUpdateArticle isUpdate = {true}
                                        currentTitle = {currentTitle}
                                        currentBody = {currentBody}
                                        buttonBackHandler = {setIsUpdateArticle}
                                        submitHandler = {updatePost}
                                        articleId = {id}
                 />  :
                 <ShowArticle body = {currentBody}
                              title = {currentTitle}
                              id ={id} deleteArticle = {deleteArticle}
                              updateArticleHandle = {setIsUpdateArticle}    />
             }
        </>
    )
})

export  default Article