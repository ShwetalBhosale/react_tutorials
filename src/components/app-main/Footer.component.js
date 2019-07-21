import React, { Component } from 'react';
import '../../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <span className = "leftNavBar">
              <h5 className="leftNav">SB</h5>
              <h3 className="header-title">React.js Tutorials </h3>
            </span>
            <h5 className="loggedIn"><u>Shwetal Bhosale</u></h5>
        </header>
        
      </div>
    );
  }
}

export default Footer;
