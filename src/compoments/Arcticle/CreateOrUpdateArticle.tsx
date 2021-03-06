import React, {useState} from "react";
import ButtonUser from "../../compoments/ButtonUser/ButtonUser";
import {withStyles} from "@material-ui/styles";
import {Card, Grid, IconButton} from "@material-ui/core";
import TextBox from "../../compoments/Inputs/TextBox/TextBox";
import {style} from "./article-style";
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import InputFile from "../Inputs/InputFile/InputFile";
import notFound from "../../images/not-found-image.jpg";
import {ICreateOrUpdateArticle} from "../../interfaces/interfaces";

const CreateOrUpdateArticle = withStyles(style)(  (
    {
        classes,
        isUpdate = false,
        initiallyTitle = "" ,
        initiallyBody = "",
        buttonBackHandler, 
        submitHandler, 
        articleId = "",  
        picture = null
    } : ICreateOrUpdateArticle) => {

    const [title, setTitle]                = useState<string>(initiallyTitle);
    const [isErrorTitle, setIsErrorTitle ] = useState<boolean>(false)

    const [articleContent, setArticleContent] = useState<string>(initiallyBody)
    const [isErrorArticleContent, setIsErrorArticleContent ] = useState<boolean>(false)

    const [file, setFile] = useState<File | undefined>( undefined)

    const backHandler = () => {
          if (title !== initiallyTitle || articleContent !== initiallyBody){
            // confirm is a temporary solution will be a modal
            if(window.confirm("you have unsaved changing. Do you want to leave?")){
                buttonBackHandler?.(false)
            }
            return
        }
        buttonBackHandler?.(false)
    }

    const ImgUrl = () => { 
        if(file){
        return (window.URL ?  window.URL : webkitURL).createObjectURL(file) 
       }
     return  picture ? `${process.env.REACT_APP_HOST_NAME}${picture}` : notFound 
   }

   const resetErrors = () =>{
    setIsErrorTitle(false)
    setIsErrorArticleContent(false)
   }

   const createFormData = (user: string ) => {
    let formData = new FormData();
    formData.append("articleId" , articleId);
    formData.append("userId" , JSON.parse(user).id);
    formData.append("title", title);
    formData.append("articleContent",  articleContent);
    if(file) {
          formData.append("picture", file)
    }
    submitHandler(formData)
   } 

    const  Register = async  ():Promise<void> => {
        resetErrors()  
        let isHasError: boolean  = false;
        if(title.length === 0 ) {
            setIsErrorTitle(true)
            isHasError = true
        }
        if(articleContent.length < 50) {
            isHasError = true
            setIsErrorArticleContent(true)
        }
        // we reset errors after  2 seconds
        setTimeout(resetErrors, 2000)
        if(!isHasError) {
            let user = localStorage.getItem("user");
            try {
                if(user) {
                    createFormData(user)
                }
            }
            catch (e){
                console.error(e)
            }
            finally {
                   setTitle("")
                   setArticleContent("")
                   setFile(undefined)
                   buttonBackHandler?.(false);
            }
        }
    }

    return(
        <Grid item sm = {12} md = {6} lg = {3} >
           <Card className = {classes.card} >
                <form  >
                    <TextBox label = "Title"
                             type  = "text"
                             placeholder = "Post Title"
                             value    = {title}
                             setValue = {setTitle}
                             HasError = {isErrorTitle}
                             ErrorMessage = "Title couldn't be Empty"
                    />

                    <TextBox
                        HasError = {isErrorArticleContent}
                        ErrorMessage = "Article content can not be less than 50 symballs"
                        multiline = {true}
                        rows      = {10}
                        value     = {articleContent}
                        setValue  = {setArticleContent}
                        label = "Article content"
                        placeholder = {""}
                        type = {"text"}
                    />
                    <img src = {ImgUrl()} className = {classes.image}/>
                    <InputFile setFile = {setFile} />
                    <ButtonUser onClick = {Register} subscription = {isUpdate ? "Update article" : "Create Article"} />
                    { isUpdate && (
                        <IconButton
                          onClick={backHandler}
                          aria-label="back read icon"
                          size={"large"}
                          className={classes.backButton}
                        >
                           <ExitToAppSharpIcon />
                        </IconButton>
                    ) }
                </form>
            </Card>
        </Grid>
    )
})

export  default CreateOrUpdateArticle