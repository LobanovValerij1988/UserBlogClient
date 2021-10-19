import React, {ReactElement, useEffect, useState} from "react";
import Article from "../Arcticle/Article";
import {IDataWraper, IPost} from "../../interfaces/interfaces";
import ButtonUser from "../ButtonUser/ButtonUser";
import {withStyles} from "@material-ui/styles";
import {style} from "./DataWrapper-style";
import {Grid ,Typography} from "@material-ui/core";

const dataOnPage : number = 4

const DataWrapper  = withStyles(style)( ({ classes, data}: IDataWraper) => {
     const showData = (currentPage : number, data : IPost[]) : ReactElement[] => {

        const startData : number = currentPage  * dataOnPage
        const endData : number = startData + dataOnPage
        const dataShower : ReactElement[] = [];

        for (let i = startData; i < endData && i < data.length; i++){
            dataShower.push(<Article post = {data[i]}  key = {data[i].id} />)
        }
        return dataShower;
    }

    const [currentPage, setCurrentPage] = useState<number> (0)
    const [allPages,setAllPages] = useState<number>(0)
    const [currentArticle, setCurrentArticle] = useState<ReactElement[]>(showData(currentPage, data))

    useEffect(()=>{
        setAllPages(Math.ceil(data.length / dataOnPage))
        setCurrentArticle(showData(currentPage, data))
    },[currentPage, data ])

    const increasePage = (): void => {
       if(currentPage < allPages - 1) {
         setCurrentPage(currentPage + 1)
       }
    }

    const decreasePage = (): void => {
       if(currentPage > 0) {
         setCurrentPage(currentPage - 1)
       }
    }

    return(
        <>
            <Grid container className = {classes.root}>
                 {currentArticle}
            </Grid>
            <Grid container justifyContent = {"center"} >
                <ButtonUser onClick = {decreasePage}  disabled={currentPage === 0} subscription = {"prev"} />
                <Typography variant = {"caption"}  className = {classes.pageCounter}> current page {currentPage + 1} from {allPages} </Typography>
                <ButtonUser onClick ={ increasePage}  disabled = {currentPage === allPages - 1 } subscription = {"next"} />
            </Grid>
        </>
    )
})

export  default DataWrapper