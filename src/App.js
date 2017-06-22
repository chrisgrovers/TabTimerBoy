import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/**
  TODO:
// Need to keep a queue of tabs set for alarm
// Point default popup to index.js...?

*/


// Code to open a new window:
/**
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
    chrome.tabs.create({ url: newURL });
});
*/


console.log('hello');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.onClick}>Open Later</button>
      </div>
    );
  }
}

export default App;
