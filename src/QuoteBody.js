import React from 'react';
import CommentList from './CommentList';

const QuoteBody = ({ id, comments }) => {
  return (
    <div
      id={id.substr(1)}
      className="collapse"
      aria-labelledby="headingTwo"
      data-parent="#quote-list"
      aria-expanded="false"
      style={{ height: '0px' }}>
      <div className="card-body">
        <h4>Comments</h4>

        <CommentList comments={comments} />

        <a href={`/quotes/${id}/comments/new`} className="btn btn-info">
          Add Comment
        </a>
      </div>
    </div>
  );
};

export default QuoteBody;
