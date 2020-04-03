import React from 'react';
import { Button } from 'semantic-ui-react';
import './Navigate.css';

interface iProps {
  postId: number;
  disabled: boolean;
  onClick: (type: string) => void;
}

const Navigate = ({ onClick, postId, disabled }: iProps) => (
  <div className="Navigate">
    <Button color="teal" content="Previous" icon="left arrow" labelPosition="left" onClick={() => onClick('PREV')} disabled={disabled} />
    <div className="Navigate-page-num">{postId}</div>
    <Button
      color="teal"
      content="Next"
      icon="right arrow"
      labelPosition="right"
      onClick={() => onClick('NEXT')}
      className="Navigate-right-button"
      disabled={disabled}
    />
  </div>
);

export default Navigate;
