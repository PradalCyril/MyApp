import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from "./Quote";
import Lamp from "./Lamp";
import NameForm from "./Input";
import GenerateEmployee from './GenerateEmployee';
import DisplayEmployee from './DisplayEmployee';
import SimpsonAppel from './SimpsonAppel';
import SimpsonQuote from './SimpsonQuote';

const  sampleEmployee = {
  gender:  'male',
  name: {
      title:  'mr',
      first:  'mathys',
      last:  'aubert'
  },
  location: {
      street:  '9467 rue gasparin',
      city:  'perpignan',
      postcode:  '90208'
  },
  email:  'mathys.aubert@example.com',
  picture: {
      medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
  }
};
const solo= {
  "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
  "character": "Nelson Muntz",
  "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  "characterDirection" : "Left"
 }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false,
      employee: sampleEmployee,
      simQuote: solo
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
          <img src={logo} className={this.state.working ? "App-logo" : "App-logo2"} alt="logo" />
          <h1 className="App-title">Coucou C'est moi !</h1>
        </header>
        <div className="Homer">
          <button onClick={() => this.working()} className={homer}>{homer.toUpperCase()}</button>
          <figure className={homer} />
        </div>
        <GenerateEmployee selectEmployee={() => this.getEmployee()} />
        <DisplayEmployee employee={this.state.employee} />
        <SimpsonAppel callQuote={ () => this.getQuote()}/>
        <SimpsonQuote simQuote ={this.state.simQuote}/>
        <Lamp on />
        <Lamp />
        <NameForm />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />

      </div>
    );
  }
  getEmployee(){
    fetch("https://randomuser.me/api?nat=fr")
      .then(response => response.json())
      .then(data => {
        this.setState({
          employee: data.results[0],
        });
    });
  }
  getQuote(){
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          simQuote: data[0],
        });
      });
  }
}

export default App;
