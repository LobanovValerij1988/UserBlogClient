
export interface  IPost extends IArticle{
    createdAt: string,
    updatedAt: string
}

 export  interface IUser{
    name: string,
    password: string,
    id: number,
    createdAt: string,
    updatedAt: string,
}

export  interface IArticle{
    userId: number,
    id:     number ,
    title:  string,
    articleContent:   string,
}