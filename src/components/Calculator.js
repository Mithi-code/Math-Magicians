import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({ total: '0', next: null, operation: null });

  const handleClick = (e) => {
    if (!e.target.name) return;
    const { next, total, operation } = calculate(data, e.target.name);
    setData({ next, total, operation });
  };
  const { total, next } = data;

  return (
    <div className="calculator">
      {next ? (
        <div className="result">{next}</div>
      ):(
        <div className="result">{total}</div>
      )}
      <table>
        <tr>
          <td>
            <button type="button" name="AC" onClick={handleClick}>
              AC
            </button>
          </td>
          <td>
            <button type="button" name="+/-" onClick={handleClick}>
              +/-
            </button>
          </td>
          <td>
            <button type="button" name="%" onClick={handleClick}>
              %
            </button>
          </td>
          <td>
            <button type="button" name="+" onClick={handleClick}>
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" name="7" onClick={handleClick}>
              7
            </button>
          </td>
          <td>
            <button type="button" name="8" onClick={handleClick}>
              8
            </button>
          </td>
          <td>
            <button type="button" name="9" onClick={handleClick}>
              9
            </button>
          </td>
          <td>
            <button type="button" className="operator" name="x" onClick={handleClick}>
              x
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" name="4" onClick={handleClick}>
              4
            </button>
          </td>
          <td>
            <button type="button" name="5" onClick={handleClick}>
              5
            </button>
          </td>
          <td>
            <button type="button" name="6" onClick={handleClick}>
              6
            </button>
          </td>
          <td>
            <button type="button" name="-" onClick={handleClick}>
              -
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" name="1" onClick={handleClick}>
              1
            </button>
          </td>
          <td>
            <button type="button" name="2" onClick={handleClick}>
              2
            </button>
          </td>
          <td>
            <button type="button" name="3" onClick={handleClick}>
              3
            </button>
          </td>
          <td>
            <button type="button" name="+" onClick={handleClick}>
              +
            </button>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button type="button" name="0" onClick={handleClick}>
              0
            </button>
          </td>
          <td>
            <button type="button" name="." onClick={handleClick}>
              .
            </button>
          </td>
          <td>
            <button type="button" name="=" onClick={handleClick}>
              =
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Calculator;
