import React from 'react';
import CommentList from './CommentList';

const QuoteBody = props => {
  return (
    <div
      id="d9424e04-9df6-4b76-86cc-9069ca8ee4bb"
      className="collapse"
      aria-labelledby="headingTwo"
      data-parent="#quote-list"
      aria-expanded="false"
      style={{ height: '0px' }}>
      <div className="card-body">
        <h4>Comments</h4>

        <CommentList />

        <a
          href="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb/comments/new"
          className="btn btn-info">
          Add Comment
        </a>
      </div>
    </div>
  );
};

export default QuoteBody;
