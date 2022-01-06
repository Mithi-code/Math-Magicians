import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <Calculator />
      </div>
    );
  }
}
export default App;



