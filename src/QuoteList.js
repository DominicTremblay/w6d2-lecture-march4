import React from 'react';
import Quote from './Quote';

const QuoteList = ({ quotes }) => {
  // Creating an array of Quote components
  const quoteList = quotes.map(quote => (
    // we need a key prop for React. Not something we can use ourselves.
    // using data from mongo db. so id is actually _id
    <Quote
      key={quote._id}
      id={quote._id}
      content={quote.quote}
      commments={quote.comments}
    />
  ));

  return (
    <div className="accordion" id="quote-list">
      {quoteList}
    </div>
  );
};

export default QuoteList;
