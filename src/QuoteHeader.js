import React from 'react';

const QuoteHeader = props => {
  return (
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button
          className="btn btn-link collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#d9424e04-9df6-4b76-86cc-9069ca8ee4bb"
          aria-expanded="false"
          aria-controls="collapseTwo">
          Why so serious?
        </button>
      </h5>

      <span>
        <form
          method="get"
          action="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb">
          <input
            type="submit"
            className="btn btn-secondary btn-sm"
            value="Edit"
          />
        </form>

        <form
          method="post"
          action="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb?_method=DELETE">
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
