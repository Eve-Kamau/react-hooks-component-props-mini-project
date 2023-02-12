import React from 'react';
import blogData from '../data/blog';
import Article from './Article';

console.log(blogData);

function ArticleList({posts}){
const blogPosts = blogData.posts.map(post => {
    return(
    <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>     
    )})

    return(
    <main>{blogPosts}</main>
    );
}  

export default ArticleList;
