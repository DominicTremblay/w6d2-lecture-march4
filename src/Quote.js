import React from 'react';
import QuoteHeader from './QuoteHeader';
import QuoteBody from './QuoteBody';

const Quote = props => {
  return (
    <div className="card">
      <QuoteHeader />
      <QuoteBody />
    </div>
  );
};

export default Quote;
