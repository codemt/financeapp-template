import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import About from './components/about';
import Professionals from './components/professionals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
              <NavBar />
           <Route path="/about" exact strict component={About} />
           <Route path="/team" exact strict component={Professionals} />
      </div>

 </Router>
    );
  }
}

export default App;
