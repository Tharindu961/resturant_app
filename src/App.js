import React from 'react';
import logo from './logo.svg';
import './App.css';
import logo1 from './images/back.jpg';

function App() {
  return (
    <div className="App">
     <div className="header">
      <h1>HOME</h1>
      </div>
      <div className="body">
        <div className="head">
          <div className="logo">
            <img src={logo1}></img>
          
          <div className="dropdown">
          <button className="dropbtn"></button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              </div>
          </div>
        </div>
        <div className="down">
          <div className="part1">
            <h2>SR Bistro</h2>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
