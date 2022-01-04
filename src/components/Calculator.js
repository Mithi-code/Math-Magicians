import React, { Component } from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className='calculator'>
        <div className='result'>0</div>
        <table>
          <tr>
            <td>AC</td>
            <td>+/-</td>
            <td>%</td>
            <td>+</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>×</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
          </tr>
          <tr>
            <td colSpan={2}>0</td>
            <td>.</td>
            <td>=</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
