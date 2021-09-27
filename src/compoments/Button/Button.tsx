import React from "react";

interface IInput{
    onClick: ()=>Promise<void> ,
}

const Button : React.FC<IInput>  = ({ onClick})=>{
    return(
        <button onClick={ onClick}> get Data </button>
    )
}
export  default Button