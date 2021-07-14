import React from 'react';
import axios from 'axios';
import CurrentQuote from './currentQuote.jsx';
import QuoteInput from './QuoteInput.jsx';
//2
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'display this',
    }
  };

  componentDidMount() {
    // GET request using axios with error handling
    axios.get('http://localhost:3000/quotes')
        .then(response => this.setState({quote: response.data})
        // console.log(response.data.total)
        )
        .catch(error => {
            this.setState({ quote: 'No quotes' });
            console.error('There was an error!', error);
        });
  }

  render() {
    return (
      <div>
        <h3>RandomQuotes!</h3>
        <div>
          <CurrentQuote quote={this.props}/>
        </div>
        <div>
          <QuoteInput quote={this.props}/>
        </div>
      </div>
    )
  }
}

export default App;