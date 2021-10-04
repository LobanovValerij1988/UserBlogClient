import React, {useState} from "react";
import ButtonUser from "../../compoments/ButtonUser/ButtonUser";
import {withStyles, WithStyles} from "@material-ui/styles";
import {Box, Card} from "@material-ui/core";
import TextBox from "../../compoments/Inputs/TextBox/TextBox";
import {style} from "./CreateNewPost-style";

interface ICreateNewPost extends WithStyles<typeof style> {
}

const CreateNewPost = withStyles(style)(  ({classes}: ICreateNewPost) => {
    const [title, setTitle]                = useState<string>("");
    const [isErrorTitle, setIsErrorTitle ] = useState<boolean>(false)

    const [articleContent, setArticleContent] = useState<string>("")
    const [isErrorArticleContent, setIsErrorArticleContent ] = useState<boolean>(false)

    const  Register = async  ():Promise<void> => {
        setIsErrorTitle(false)
        setIsErrorArticleContent(false)
        let isHasError: boolean  = false;
        if(title.length === 0 ) {
            setIsErrorTitle(true)
            isHasError = true
        }
        if(articleContent.length < 50) {
            isHasError = true
            setIsErrorArticleContent(true)
        }
        setTimeout(() => {
            setIsErrorTitle(false)
            setIsErrorArticleContent(false)
        },2000)
        if(!isHasError) {
        let user = localStorage.getItem("user");
        try {
                if(user) {
                    const article = {
                        title: title,
                        articleContent: articleContent,
                        userId: JSON.parse(user).id
                    }
                    const response = await fetch('http://localhost:3001/SavePost', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(article)
                    })
                    if (response.ok) {
                         console.log("post  was saved")
                    }
                }
            }
            catch (e){
                console.log(e)
            }
            finally {
                setTitle("")
                setArticleContent("")
            }
        }
    }

    return(
        <Box className = {classes.form} component = {"form"}
             sx = {{

                 background: 'gold',
                 '& .MuiTextField-root': { m: 1, width: '50ch', display : "block"},
             }}
        >
          <Card>
               <form>
                  <TextBox label = "Title"
                             type = "text"
                             placeholder = "Post Title"
                             value = {title}
                             setValue = {setTitle}
                             HasError = {isErrorTitle}
                             ErrorMessage = "Title couldn't be Empty"  />

                    <TextBox
                        HasError = {isErrorArticleContent}
                        ErrorMessage = "Article content can not be less than 50 symballs"
                        multiline={true}
                        rows = {10}
                        value = {articleContent}
                        setValue = {setArticleContent}
                        label = "Article content"
                        placeholder = {""}
                        type = {"text"}

                    />
                    <ButtonUser onClick = {Register} subscription = {"Sign In"} />
               </form>
           </Card>
        </Box>
    )
})

export  default CreateNewPost