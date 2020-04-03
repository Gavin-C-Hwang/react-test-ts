import React from 'react';
import './Post.css';
import { CommentList } from '../';

interface IProps {
  title: string;
  body: string;
  comments: [];
}

const Post = (props: IProps) => (
  <div className="Post">
    <h1>{props.title}</h1>
    <p>{props.body}</p>
    <CommentList comments={props.comments} />
  </div>
);

export default Post;
