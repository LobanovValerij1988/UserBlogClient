import React  from "react";
import {withStyles, WithStyles} from "@material-ui/styles";
import {style} from "../../../pages/SignInPage/SignIn-style";
import {TextField} from "@material-ui/core";

interface ITextBox extends WithStyles<typeof style> {
HasError: boolean,
ErrorMessage: string,
label: string,
placeholder: string,
value: string,
setValue: (value: string) => void
type:string
}

const TextBox = withStyles(style)(  ({classes, HasError, ErrorMessage, label, placeholder, value, setValue, type}: ITextBox) => {


  return(
        <TextField error = {HasError}
                   type = {type}
                   helperText = {HasError ? ErrorMessage : ""}
                   label = { label}
                   placeholder = {placeholder}
                   margin = {"normal"}
                   className = {classes.textBox}
                   value = {value}
                   onChange = {(e) => {setValue(e.target.value)}}
        />
    )
})

export default TextBox;