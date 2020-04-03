import React from 'react';
import { Comment } from '../';
import './CommentList.css';

interface iComment {
  name: string;
  body: string;
}

interface IProps {
  comments: iComment[];
}

const CommentList = (props: IProps) => {
  const commentList = props.comments.map((comment, index) => <Comment name={comment.name} body={comment.body} key={index} />);

  return <ul className="CommentList">{commentList}</ul>;
};

export default CommentList;
