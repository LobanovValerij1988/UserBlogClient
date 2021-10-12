import React from "react";
import MyForm from "../../compoments/Form/Form";
import {withStyles} from "@material-ui/styles";
import {style} from "../../compoments/Arcticle/article-style";
import {IMyForm} from "../../interfaces/interfaces";

const GetAllPosts = withStyles(style)(  ({posts,setPosts}:IMyForm) => {
    return(
        <MyForm  posts = {posts} setPosts={setPosts}/>
    )
})

export default GetAllPosts;