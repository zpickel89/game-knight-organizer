import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import './App.css';

import TopNav from './navigation/TopNav';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TopNav />
          <div>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
