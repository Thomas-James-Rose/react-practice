import React, { Component } from 'react';
import Hello from "./hello-component/Hello.jsx";
import ClickCounter from "./click-counter/ClickCounter.jsx"

class App extends Component {
  render() {
    return (
      <div>
        <Hello name="Everybody!" />
        <ClickCounter />
      </div>
    );
  }
}

export default App;
