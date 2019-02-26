import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import RegisterDog from "./components/RegisterDog";
import RegisterEvent from "./components/RegisterEvent";
import Dashboard from "./components/Dashboard";


class App extends Component {
  render() {
    return (
            <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/registerdog" component={RegisterDog} />
              <Route exact path="/registerevent" component={RegisterEvent} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
              </Provider>

    );
  }
}

export default App;
