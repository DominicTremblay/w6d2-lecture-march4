import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <ul className="list-group">
      <Comment />
    </ul>
  );
};

export default CommentList;
