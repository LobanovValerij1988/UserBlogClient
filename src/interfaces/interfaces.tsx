import {WithStyles} from "@material-ui/styles";
import {style} from "../compoments/Arcticle/article-style";
import React from "react";

export interface  IPost extends IArticleBase{
    picture: string | null,
    userId:    number,
    createdAt: string,
    updatedAt: string
}

export interface ICreateOrUpdateArticle extends WithStyles<typeof style> {
    isUpdate?: boolean,
    initiallyTitle?: string,
    initiallyBody?: string,
    picture: string | null
    buttonBackHandler ?: (isBack:boolean) => void
    submitHandler : (formdata: FormData ) => Promise<void>
    articleId?: string,
}

export  interface IArticleBase extends WithStyles<typeof style>{
    id:     number,
    title:  string,
    articleContent:string,
}


 export  interface IUser{
    name: string,
    password: string,
    id: number,
    createdAt: string,
    updatedAt: string,
}

export interface IInputFile extends WithStyles<typeof style> {
    setFile: (newFile: File | undefined ) => void
}

export interface IPostManager  {
    posts : IPost[] | undefined,
    setPosts: (data:IPost[] | undefined) => void
}

export interface IMyForm extends WithStyles<typeof style> {
    posts : IPost[] | null,
    setPosts: (data:IPost[] | null) => void
}

export  interface  IArticle extends WithStyles<typeof style>{
  post :  IPost
}

export  interface  IShowArticle extends WithStyles<typeof style>{
    title: string;
    body:  string;
    id:    number
    picture: string | null,
    updateArticleHandle: (isUpdate:boolean ) => void
}

export interface IButton extends WithStyles<typeof style>{
    onClick: ()=> void,
    subscription: string,
    disabled?: boolean
}

export interface IDataWraper extends WithStyles<typeof style> {
    data : IPost[],
}

export interface ITextBox extends WithStyles<typeof style> {
    HasError: boolean,
    ErrorMessage: string,
    label: string,
    placeholder: string,
    value: string,
    setValue: (value: string) => void,
    type:string,
    multiline?: boolean
    rows?: number
}

export interface INavigationMenu extends WithStyles<typeof style>{
}

export interface ITabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface ISignInPage extends WithStyles<typeof style> {
    setUser: (user :IUser) => void
}