import React from "react";
import {IArticle} from "../../interfaces/interfaces";

const Arcticle : React.FC<IArticle>  = ({title,body})=>{
    return(
        <>
            <h1>{title}</h1>
            <p> {body} </p>
        </>
    )
}
export  default Arcticle