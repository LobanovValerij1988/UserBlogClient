import React from "react";
import MyForm, {IMyForm} from "../../compoments/Form/Form";
import {withStyles} from "@material-ui/styles";
import {style} from "../../compoments/Arcticle/article-style";

const GetAllPosts = withStyles(style)(  ({posts,setPosts}:IMyForm) => {
    return(
        <MyForm  posts = {posts} setPosts={setPosts}/>
    )
})

export default GetAllPosts;