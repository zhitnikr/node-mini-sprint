import React from "react";
import axios from 'axios';

class QuoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('a change!');
    this.setState({field: event.target.value});
    console.log(this.state)
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('you hit submit!');
  }
  handleGet(event) {
    event.preventDefault();
    console.log('you hit get!');
    axios.get('http://localhost:3000/quotes')
        .then(response => this.setState({quote: response.data}),
        console.log(response.data.total),
        )
        .catch(error => {
            this.setState({ quote: 'No quotes' });
            console.error('There was an error!', error);
        });
  }

  render() {
    return (
      <div>
        < input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button><button onClick={this.handleGet}>Get</button>
      </div>
    )
  }

}

export default QuoteInput;