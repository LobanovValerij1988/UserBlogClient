import React from "react";
import {Button} from '@material-ui/core'
import {style} from "./button-style";
import {withStyles} from "@material-ui/styles";
import {IButton} from "../../interfaces/interfaces";

const ButtonUser = withStyles(style)(  ({classes, onClick, subscription, disabled = false}: IButton) => {
    return(
        <Button onClick = {onClick} disabled = {disabled} variant = "contained"  className = {classes.button}> {subscription} </Button>
    )
})

export  default ButtonUser