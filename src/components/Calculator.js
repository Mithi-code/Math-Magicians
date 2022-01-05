import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!e.target.name) return;
    const data = calculate(this.state, e.target.name);
    this.setState({ ...data });
  }
  render() {
    return (
      <div className="calculator">
        {this.state.next ? (
          <div className="result">{this.state.next}</div>
        ) : (
          <div className="result">{this.state.total}</div>
        )}
        <table onClick={this.handleClick}>
          <tr>
            <td>
              <button type="button" name="AC">
                AC
              </button>
            </td>
            <td>
              <button type="button" name="+/-">
                +/-
              </button>
            </td>
            <td>
              <button type="button" name="%">
                %
              </button>
            </td>
            <td>
              <button type="button" name="+">
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" name="7">
                7
              </button>
            </td>
            <td>
              <button type="button" name="8">
                8
              </button>
            </td>
            <td>
              <button type="button" name="9">
                9
              </button>
            </td>
            <td>
              <button type="button" className="operator" name="x">
                x
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" name="4">
                4
              </button>
            </td>
            <td>
              <button type="button" name="5">
                5
              </button>
            </td>
            <td>
              <button type="button" name="6">
                6
              </button>
            </td>
            <td>
              <button type="button" name="-">
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" name="1">
                1
              </button>
            </td>
            <td>
              <button type="button" name="2">
                2
              </button>
            </td>
            <td>
              <button type="button" name="3">
                3
              </button>
            </td>
            <td>
              <button type="button" name="+">
                +
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="button" name="0">
                0
              </button>
            </td>
            <td>
              <button type="button" name=".">
                .
              </button>
            </td>
            <td>
              <button type="button" name="=">
                =
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
