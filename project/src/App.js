import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import './App.css';
import ConvoForm from './components/ConvoForm.js';
<<<<<<< Updated upstream
import ResultsList from './components/ResultsList.js';

const dev = true;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      finishedSurvey: false,
      results: null,
      navbarOpen: false
    };

    this.handleFinishedSurvey = this.handleFinishedSurvey.bind(this);
    this.handleNavbar = this.handleNavbar.bind(this);
    this.formSubmitCallback = this.formSubmitCallback.bind(this);
=======
import GlobalStyle from './styles/Global';import './App.css';
import Suggestions from './components/navbar/Suggestions.js';
import './components/navbar/Suggestions.css';

class App extends Component {
  state = {
    navbarOpen: false,
    finishedSurvey: true
>>>>>>> Stashed changes
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
    this.handleFinishedSurvey();

    console.log('SUBMITTED');
    this.setState({
      results: response.data,
    });
  }

  render() {
    let current, message;

    if (!this.state.finishedSurvey) {
      current = <ConvoForm appCallback={this.formSubmitCallback} dev={dev}/>
    } else {
      current = <Navbar
      navbarState={this.state.navbarOpen}
      handleNavbar={this.handleNavbar} />
<<<<<<< Updated upstream
    }
    console.log(this.state.results);
    return (
      <div className='container'>
        {current}
        {this.state.results && <ResultsList results={this.state.results} />}
      </div>
    );
=======
    }   

    return (  
      <>
        <body>
          
        <GlobalStyle />
        {current}
        <Suggestions/>
        </body>
      </>
    )
>>>>>>> Stashed changes
  }
}

export default App;
