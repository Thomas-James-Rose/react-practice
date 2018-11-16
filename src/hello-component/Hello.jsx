import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
}

Hello.defaultProps = {
  name: "world",
}

Hello.propTypes = {
  name: PropTypes.string.isRequired
}

export default Hello;
