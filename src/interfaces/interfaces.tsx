
export interface  IPost {
    userId: number,
    id:     number,
    title:  string,
    articleContent:   string,
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