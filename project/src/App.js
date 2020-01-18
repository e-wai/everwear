import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import logo from './assets/logo.png';
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
      <ConvoForm />
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