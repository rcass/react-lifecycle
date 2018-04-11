import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    console.log("component did mount. You can do ajax or server api calls here.");
  }

  componentWillMount(){
    console.log("component will be mounted soon.");
  }

  componentWillReceiveProps(){
    console.log("component will recieve props.");
  }
  shouldComponentUpdate(){
    console.log("this helps react to decide whether to update the component");
  }

  componentWillUpdate(){
    console.log("component will update");
  }

  componentDidUpdate(){
    console.log("component finished updating");
  }

  componentWillUnmount(){
    console.log("This will be called when the component is unmounted");
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
