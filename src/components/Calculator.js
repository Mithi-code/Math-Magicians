import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

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
    const { next, total, operation } = calculate(this.state, e.target.name);
    this.setState({ next, total, operation });
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calculator">
        {next ? (
          <div className="result">{next}</div>
        ) : (
          <div className="result">{total}</div>
        )}
        <table>
          <tr>
            <td>
              <button type="button" name="AC" onClick={this.handleClick}>
                AC
              </button>
            </td>
            <td>
              <button type="button" name="+/-" onClick={this.handleClick}>
                +/-
              </button>
            </td>
            <td>
              <button type="button" name="%" onClick={this.handleClick}>
                %
              </button>
            </td>
            <td>
              <button type="button" name="+" onClick={this.handleClick}>
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" name="7" onClick={this.handleClick}>
                7
              </button>
            </td>
            <td>
              <button type="button" name="8" onClick={this.handleClick}>
                8
              </button>
            </td>
            <td>
              <button type="button" name="9" onClick={this.handleClick}>
                9
              </button>
            </td>
            <td>
              <button type="button" className="operator" name="x" onClick={this.handleClick}>
                x
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" name="4" onClick={this.handleClick}>
                4
              </button>
            </td>
            <td>
              <button type="button" name="5" onClick={this.handleClick}>
                5
              </button>
            </td>
            <td>
              <button type="button" name="6" onClick={this.handleClick}>
                6
              </button>
            </td>
            <td>
              <button type="button" name="-" onClick={this.handleClick}>
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" name="1" onClick={this.handleClick}>
                1
              </button>
            </td>
            <td>
              <button type="button" name="2" onClick={this.handleClick}>
                2
              </button>
            </td>
            <td>
              <button type="button" name="3" onClick={this.handleClick}>
                3
              </button>
            </td>
            <td>
              <button type="button" name="+" onClick={this.handleClick}>
                +
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="button" name="0" onClick={this.handleClick}>
                0
              </button>
            </td>
            <td>
              <button type="button" name="." onClick={this.handleClick}>
                .
              </button>
            </td>
            <td>
              <button type="button" name="=" onClick={this.handleClick}>
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
