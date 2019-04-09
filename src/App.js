import React, { Component } from 'react';
import './App.css';
import QuoteList from './QuoteList';
import AddQuote from './AddQuotes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addQuote: false,
      quotes: [],
    };
  }

  componentDidMount() {
    // fetch request or Axios
    fetch('/quotes')
      .then(response => response.json())
      // update the state
      .then(quotes => this.setState({ quotes }));
  }

  toggleAddQuote = evt => {
    // Reminder: setState is an async function. It can use a callback.
    this.setState({ addQuote: true }, () => console.log('State:', this.state));
    // console.log here would not output the right values
    // console.log('State:', this.state)
  };

  addNewQuote = content => {
    // create post request to backend
    const data = {
      quote: content,
    };

    fetch('/quotes', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(result => result.json())
      // receive the new quote from the backend an update the state
      .then(quote => this.setState({ quotes: [...this.state.quotes, quote] }))
      .then(() => this.setState({ addQuote: false }));
    // using concat
    // const newArr = this.state.quotes.concat(quote)
    // this.setState({quotes: newArr})
  };

  render() {
    return (
      <div className="container">
        <h1>Movie Quotes</h1>
        <QuoteList quotes={this.state.quotes} />

        {/*  if addQuote is true, remove the button */}
        {this.state.addQuote ? null : (
          <button className="btn btn-primary" onClick={this.toggleAddQuote}>
            Add Quote
          </button>
        )}

        {/*  if addQuote is true, display component <AddQuote /> */}
        {/*  Passing down the function addNewQuote to AddQuote through props */}
        {this.state.addQuote ? (
          <AddQuote addNewQuote={this.addNewQuote} />
        ) : null}
      </div>
    );
  }
}

export default App;
