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
    this.handleGet = this.handleGet.bind(this);
  };

  componentDidMount() {
    // GET request using axios with error handling
    axios.get('http://localhost:3000/quotes')
        .then((response) => this.setState({quote: response.data})
        // console.log(response.data.total)
        )
        .catch((error) => {
            this.setState({ quote: 'No quotes' });
            console.error('There was an error!', error);
        });
  }

  handleGet() {
    console.log('test');
    // event.preventDefault();
    // console.log('you hit get!'); WORKS
    axios.get('http://localhost:3000/quotes')
        .then((response) => {
          this.setState({quote: response.data})
        })
        // console.log(response.data)
        .catch((error) => {
            this.setState({ quote: 'No quotes' });
            console.error('There was an error!', error);
        });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h3>RandomQuotes!</h3>
        <div>{'this.state.quote = ' + this.state.quote}</div>
        <button onClick={this.handleGet}>Get</button>
        {/* <div>
          <CurrentQuote quote={this.state.quote}/>
        </div>
        <div>
          <QuoteInput quote={this.state.quote}/>
        </div> */}
      </div>
    )
  }
}

export default App;