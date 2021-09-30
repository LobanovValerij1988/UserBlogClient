import React from "react";
import {Button} from '@material-ui/core'
import {style} from "./button-style";
import {withStyles, WithStyles} from "@material-ui/styles";

interface IButton extends WithStyles<typeof style>{
    onClick: ()=> void,
    subscription: string,
    disabled?: boolean
}

const ButtonUser = withStyles(style)(  ({classes, onClick, subscription, disabled = false}: IButton) => {
    return(
        <Button onClick = {onClick} disabled = {disabled} variant = "contained"  className = {classes.button}> {subscription} </Button>
    )
})

export  default ButtonUser