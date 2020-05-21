import React from 'react';
import logo from './logo.svg';
import './App.css';
import logo1 from './images/back.jpg';
import star from './images/star.png';
import bell from './images/bell.png';
import menu from './images/menu.png';
import info from './images/info.png';
import Snack1 from './images/imh1.jpg';
import Snack2 from './images/imh2.jpg';

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
          <div className="head2">
            <h2>SR Bistro</h2>
            </div>
            <div className="rate">
            
            <img src={star}></img>
            
            <img id="bell" src={bell}></img>
            <h3>5.0</h3>
            </div>
            
          </div>
          <hr class="line"></hr>

          <div className="part2">
            <table>
              <tr>
                <td><img id="img1" src={menu}></img></td>
                <td><img id="img2" src={info}></img></td>
              </tr>
            </table>
          </div>

          <hr class="line2"></hr>
          <div className="part3">
            <h2>Snacks</h2>
            <table>
              <tr>
                <td><img id="img3" src={Snack1}></img></td>
                <td><img id="img4" src={Snack2}></img></td>
              </tr>
            </table>
          </div>

        </div>
        
      </div>

    </div>
  );
}

export default App;
