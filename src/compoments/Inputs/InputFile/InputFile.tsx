import React, {useRef, useState} from "react";
import {withStyles} from "@material-ui/styles";
import {style} from "./InputFile-style";
import {IInputFile} from "../../../interfaces/interfaces";

const allowedExtentions = [".jpg", ".png", ".jpeg"]

const InputFile = withStyles(style)( ({classes,setFile}: IInputFile) => {
    const refFile = useRef<HTMLInputElement>(null)
    const [fileError, setFileError] = useState<string>("");
    const setFileLoadError = (errorDescription: string)=>{
        if(refFile.current){
            setFileError(errorDescription);
            setFile(undefined);
            setTimeout(() =>  setFileError(""),2000)
            refFile.current.value = "";
        }
    }

    const fileChangeHandler = () => {
      const maxFileSize = 64000
      const currentFile =  refFile.current?.files?.[0];
      if(!currentFile){
          return;
      }

      const fileExtension =  refFile.current?.value.match(/\.[a-z]{3,4}$/i)?.[0] ;

      if(fileExtension){
          if(!allowedExtentions.includes(fileExtension)){
            setFileLoadError("unsupported extension only .jpg .png .jpeg")
          }
         else if (currentFile.size  > maxFileSize ) {
              setFileLoadError("file size can not be more than 64kb")
          }
         else {
              setFile(refFile.current?.files?.[0]);
          }
       }
      else{
          setFileLoadError("unsupported extension only .jpg .png .jpeg")
      }
   }

    return(
           <div className={classes.inputWrapper}>
                 <input type="file"  accept="image/*" ref = {refFile} onChange = {fileChangeHandler} />
                 <br/>
                 <span className={classes.warning}> {fileError}</span>
           </div>
        )
    })

export default InputFile;