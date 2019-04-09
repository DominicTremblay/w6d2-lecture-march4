import React from 'react';
import Quote from './Quote';

const QuoteList = props => {
  return (
    <div className="accordion" id="quote-list">
      <Quote />
    </div>
  );
};

export default QuoteList;
