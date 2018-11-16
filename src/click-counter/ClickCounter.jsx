import React, { Component } from 'react';

class ClickCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    });
  }

  render() {
    return (
      <button onClick={this.incrementCount}>
        {this.state.counter}
      </button>
    );
  }
}



export default ClickCounter;
