import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Routing
import {Link, Route, Switch} from 'react-router-dom';

//Components
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <div>
              <ul>
                  <li><Link to={"/"}>Home</Link></li>
                  <li><Link to={"/About"}>About</Link></li>
              </ul>
          </div>

          <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route path={"/About"} component={About}/>
          </Switch>

      </div>
    );
  }
}

export default App;
