import React from "react";

export interface  IPost extends IArticle{
    userId: number,
    id:     number
}

export interface  IArticle{
    title:  string,
    body:   string
}