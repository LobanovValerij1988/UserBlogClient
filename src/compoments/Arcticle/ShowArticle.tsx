import React, {useState} from "react";
import {Card, Typography, Grid, CardHeader, IconButton, Collapse, CardActions, CardMedia} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import {style} from "./article-style"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateSharpIcon from '@mui/icons-material/UpdateSharp';
import {IShowArticle} from "../../interfaces/interfaces";
import notFound from "../../images/not-found-image.jpg";

const ShowArticle = withStyles(style)( ({classes, title, body, id, deleteArticle, updateArticleHandle, picture}: IShowArticle) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    console.log(`${process.env.REACT_APP_HOST_NAME}${picture}`);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Grid item sm = {12} md = {6} lg = {3} >
            <Card className = {classes.card} >
                <CardHeader
                    action = {
                        <IconButton aria-label="settings"
                                    onClick={()=>deleteArticle(id)}
                        >
                            <DeleteIcon  color={"error"}/>
                        </IconButton>
                    }
                    title = {title}
                />
                <CardMedia
                    component = "img"
                    width = "100%"
                    image = {picture ? ` ${process.env.REACT_APP_HOST_NAME}${picture}` : notFound}
                    alt = {`${title} image`}
                />
                <CardActions disableSpacing>
                    <IconButton
                        onClick={handleExpandClick}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    <IconButton
                        onClick = {()=>updateArticleHandle(true)}
                        aria-label = "update Article"
                    >
                        <UpdateSharpIcon />
                    </IconButton>
                </CardActions>
                <Collapse in = {expanded}  >
                    <Typography className = {classes.cardContent}> {body} </Typography>
                </Collapse>
            </Card>
        </Grid>
    )
})

export  default ShowArticle