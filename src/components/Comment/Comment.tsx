import React from 'react';
import './Comment.css';

interface iComment {
  name: string;
  body: string;
}

const Comment = (props: iComment) => (
  <li className="Comment">
    <p>
      <b>{props.name}</b>
      {props.body}
    </p>
  </li>
);

export default Comment;
