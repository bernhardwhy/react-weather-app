import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import { Route, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Detail from './Detail/Detail';
import BackgroundContainer from './components/BackgroundContainer/BackgroundContainer';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <BackgroundContainer weatherType='summer' />
        <Route path='/detail' exact component={Detail} />
      </div>
    );
  }
}

export default App;
