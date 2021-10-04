import React, {useState} from "react";
import {Card, Typography, Grid, CardHeader, IconButton, Collapse, CardActions} from "@material-ui/core";
import {WithStyles, withStyles} from "@material-ui/styles";
import {style} from "./article-style"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

export  interface  IArticle extends WithStyles<typeof style>{
    title: string;
    body:  string;
    id:    number
    deleteArticle: (id : number) => void
}

const Article = withStyles(style)( ({classes, title, body, id, deleteArticle}: IArticle) => {
    const [expanded, setExpanded] = useState<boolean>(false);

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
                <CardActions disableSpacing>
                    <IconButton
                        onClick={handleExpandClick}
                          aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded}  >
                    <Typography className={classes.cardContent}> {body} </Typography>
                </Collapse>
            </Card>
        </Grid>
    )
})

export  default Article