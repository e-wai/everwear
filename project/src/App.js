import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConvoForm from './components/ConvoForm.js';
import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
      </>
    )
  }
}

export default App;