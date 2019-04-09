import React from 'react';

const QuoteHeader = ({ id, content }) => {
  return (
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button
          className="btn btn-link collapsed"
          type="button"
          data-toggle="collapse"
          data-target={`#${id.substr(1)}`}
          aria-expanded="false"
          aria-controls="collapseTwo">
          {content}
        </button>
      </h5>

      <span>
        <form method="get" action={`/quotes/${id}`}>
          <input
            type="submit"
            className="btn btn-secondary btn-sm"
            value="Edit"
          />
        </form>

        <form method="post" action={`/quotes/${id}?_method=DELETE`}>
          <input
            type="submit"
            className="btn btn-secondary btn-sm"
            value="Delete"
          />
        </form>
      </span>
    </div>
  );
};

export default QuoteHeader;
