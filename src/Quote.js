import React from 'react';
import QuoteHeader from './QuoteHeader';
import QuoteBody from './QuoteBody';

const Quote = ({ id, content, comments }) => {
  return (
    <div className="card">
      <QuoteHeader id={id} content={content} />
      <QuoteBody id={id} comments={comments} />
    </div>
  );
};

export default Quote;
