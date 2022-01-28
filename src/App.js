import React, { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
         <header>
                <h1>Math Magicians</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Calculator">Calculator</a></li>
                    <li><a href="/Quote">Quote</a></li>
                </ul>
            </header>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Calculator" element={<Calculator />} />
        <Route exact path="/Quote" element={<Quote />} />
      </Routes>
     </BrowserRouter>
     <footer>© 2022 Copyright by Mithlesh Kumar</footer>
      </div>
    );
  }
}
export default App;
