import React, {useContext, useState} from "react";
import {Card, Typography, Grid, CardHeader, IconButton, Collapse, CardActions, CardMedia} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import {style} from "./article-style"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateSharpIcon from '@mui/icons-material/UpdateSharp';
import {IShowArticle} from "../../interfaces/interfaces";
import notFound from "../../images/not-found-image.jpg";
import {PostManager} from "../App/App";

const ShowArticle = withStyles(style)( ({classes, title, articleContent, id, updateArticleHandle, picture}: IShowArticle) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const postManager = useContext(PostManager)
    const deletePost = async (id: number) =>{
        try {
            const articleId = {
                articleId: id
            }
            const response = await fetch(`${process.env.REACT_APP_HOST_NAME}/DeletePost`, {
                method: 'Delete',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(articleId)
            })
            if (response.ok) {
                const newPost = postManager.posts?.filter(post => post.id !== id)
                postManager.setPosts(newPost ? newPost : undefined);
            }
        }
        catch (e){
            console.log(e)
        }
    }


    return(
        <Grid item sm = {12} md = {6} lg = {3} >
            <Card className = {classes.card} >
                <CardHeader
                    action = {
                        <IconButton aria-label="settings"
                                    onClick={() => deletePost(id)}
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
                    <Typography className = {classes.cardContent}> {articleContent} </Typography>
                </Collapse>
            </Card>
        </Grid>
    )
})

export  default ShowArticle