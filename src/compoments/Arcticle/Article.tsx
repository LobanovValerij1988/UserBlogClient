import React  from "react";
import {Card, CardContent, Typography,Grid} from "@material-ui/core";
import {WithStyles, withStyles} from "@material-ui/styles";
import {style} from "./article-style"

export  interface  IArticle extends WithStyles<typeof style>{
    title: string;
    body:  string;
}

const Article = withStyles(style)( ({classes, title, body}: IArticle) => {
    return(
        <Grid item sm = {12} md = {6} lg = {3} >
            <Card className = {classes.card} >
                <CardContent className = {classes.content}>
                    <Typography className = {classes.title} variant = "h4" > {title} </Typography>
                    <Typography> {body} </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
})

export  default Article