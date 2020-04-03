import React from 'react';
import './PostWrapper.css';

interface IProps {
  children: any;
}

const PostWrapper = (props: IProps) => {
  return <div className="PostWrapper">{props.children}</div>;
};
export default PostWrapper;
