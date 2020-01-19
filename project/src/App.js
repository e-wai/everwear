import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import './App.css';
import ConvoForm from './components/ConvoForm.js';
import GlobalStyle from './styles/Global';import './App.css';

class App extends Component {
  state = {
    navbarOpen: false,
    finishedSurvey: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
    this.state(
      { navbarOpen: !this.state.navbarOpen
      }); 
  }

  handleFinishedSurvey () {
    this.state (
      {finishedSurvey : this.state.finishedSurvey}
    )
  }

  render() {
    let current;

    if (!this.state.finishedSurvey) {
      current = <ConvoForm />
    } else {
      current = <Navbar 
      navbarState={this.state.navbarOpen} 
      handleNavbar={this.handleNavbar} />
    }   
    return (  
      <>
        <body>
          
        <GlobalStyle />
        {current}
        </body>
      </>
    )
  }
}  

export default App;