import React from 'react';

// const CurrentQuote = (props) => {
//   return (
//     <div>
//       <div>{'What is props even? props = ' + JSON.stringify(props)}</div>
//       <div>{'props.quote = ' + props.quote}</div>
//     </div>
//   )
// }2

class CurrentQuote extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('currentquote: ', this.props)
    return (
      <div>
        {/* <div>{'What is props even? props = ' + JSON.stringify(this.props)}</div> */}
        <div>{'this.props.quote = ' + this.props.quote}</div>
        <button onClick={this.handleGet}>Get</button>
      </div>
    )
  }
}
export default CurrentQuote;