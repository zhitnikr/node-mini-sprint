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
  // handleGet(event) {
  //   event.preventDefault();
  //   // console.log('you hit get!'); WORKS
  //   axios.get('http://localhost:3000/quotes')
  //       .then(response => {
  //         console.log(response.data);
  //         // this.props({quote: response.data});
  //       }
  //       )
  //       .catch(error => {
  //           this.props({ quote: 'No quotes' });
  //           console.error('There was an error!', error);
  //       });
  // }

  render() {
    // console.log('This is the quoteINput props: ', this.props)
    return (
      <div>
        < input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }

}

export default QuoteInput;