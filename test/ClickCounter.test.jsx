import React from 'react';
import ReactDOM from 'react-dom';
import ClickCounter from '../src/click-counter/ClickCounter.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClickCounter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
