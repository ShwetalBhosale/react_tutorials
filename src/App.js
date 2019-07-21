
import React, { Component } from 'react';
import './App.css';
import Header from './components/app-main/Header.component';
import Contents from '../src/components/app-main/Contents.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
            <h3>React.js Tutorials</h3>
        </Header>
        <Contents></Contents>
      </div>
    );
  }
}

export default App;
