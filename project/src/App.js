import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import './App.css';
import ConvoForm from './components/ConvoForm.js';

const dev = true;

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
    // Uncomment line below to change thing:
    // this.handleFinishedSurvey();

    console.log('SUBMITTED');
    response.data.forEach((item, i) => {
      console.log(item.site)
    });

  }

  render() {
    let current;

    if (!this.state.finishedSurvey) {
      current = <ConvoForm appCallback={this.formSubmitCallback} dev={dev}/>
    } else {
      current = <Navbar
      navbarState={this.state.navbarOpen}
      handleNavbar={this.handleNavbar} />
    }
    return (
      <div className='container'>
        {current}
      </div>
    )
  }
}

export default App;
