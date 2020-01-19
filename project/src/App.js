import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import './App.css';
import ConvoForm from './components/ConvoForm.js';
import GlobalStyle from './styles/Global';import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      navbarOpen: false
    };

    this.handleFinishedSurvey = this.handleFinishedSurvey.bind(this);
    this.handleNavbar = this.handleNavbar.bind(this);
    this.formSubmitCallback = this.formSubmitCallback.bind(this);
  }

  handleNavbar() {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    });
  }

  handleFinishedSurvey () {
    this.setState ({
      finishedSurvey : true
    });
  }

  formSubmitCallback(response){
    this.handleFinishedSurvey();

    console.log('SUBMITTED');

  }


  render() {
    let current;

    if (!this.state.finishedSurvey) {
      current = <ConvoForm appCallback={this.formSubmitCallback}/>
    } else {
      current = <Navbar
      navbarState={this.state.navbarOpen}
      handleNavbar={this.handleNavbar} />
    }
    return (
      <>
        <GlobalStyle />
        {current}
      </>
    )
  }
}

export default App;
