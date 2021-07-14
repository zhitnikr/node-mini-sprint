import React from 'react';
import axios from 'axios';
import CurrentQuote from './currentQuote.jsx';
import QuoteInput from './QuoteInput.jsx';
//2
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Default Quote',
      field: '',
    }
    this.handleGet = this.handleGet.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    event.preventDefault();
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

  handleChange(event) {
    event.preventDefault();
    console.log('a change!');
    // console.log(event.target.value)
    this.setState({field: event.target.value});
    // console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('you hit submit! ');
    axios.post('http://localhost:3000/quotes', {
      field: this.state.field
    })
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
        <input value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.handleGet}>Get</button><button onClick={this.handleSubmit}>Submit</button>
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