import React, {useState} from "react";
import Button from "../Button/Button";
import {IPost} from "../../interfaces/interfaces";
import DataWrapper from "../DataWrapper/DataWrapper";

interface IForm{
    formHeader: string,
}

const MyForm : React.FC<IForm>  = ({ formHeader})=>{
        const [posts, setPosts]=useState<IPost[]>([]);

        const  GetAllUsers = async  ():Promise<void> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if (response.ok) {
                const data : IPost[] = await response.json()
                setPosts(data)
            }
        }
    return(
        <>
            <div>{formHeader}</div>
            <Button onClick={GetAllUsers}/>
            {
                posts.length > 0 && <DataWrapper data={posts}/>
            }
        </>
    )
}
export  default MyForm