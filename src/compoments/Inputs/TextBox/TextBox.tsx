import React  from "react";
import {withStyles} from "@material-ui/styles";
import {style} from "./TextBox-style";
import {TextField} from "@material-ui/core";
import {ITextBox} from "../../../interfaces/interfaces";

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