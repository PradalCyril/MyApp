import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from "./Quote";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }
  working = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    const homer = this.state.working ? 'work' : 'not work';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working ? "App-logo" : "App-logo2"}  alt="logo" />
          <h1 className="App-title">Coucou C'est moi !</h1>
        </header>
        <div className="Homer">
            <button onClick={() => this.working()} className={homer}>{homer.toUpperCase()}</button>
            <figure className={homer} />
          </div>
        <Lamp on />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />

      </div>
    );
  }
}

export default App;
