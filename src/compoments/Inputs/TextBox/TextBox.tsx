import React  from "react";
import {withStyles, WithStyles} from "@material-ui/styles";
import {style} from "./TextBox-style";
import {TextField} from "@material-ui/core";

interface ITextBox extends WithStyles<typeof style> {
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

const TextBox = withStyles(style)(
    ({classes,
                HasError,
                ErrorMessage,
                label,
                placeholder,
                value,
                setValue,
                type,
                multiline = false,
                rows = 1,
              }: ITextBox) => {
  return(
        <TextField error = {HasError}
                   multiline={multiline}
                   rows={rows}
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