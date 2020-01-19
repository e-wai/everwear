import React from 'react';
import axios from 'axios';
//import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import { ConversationalForm } from 'conversational-form';
import './ConvoForm.css';
import hardData from '../data.json';
import greenlogo from '../assets/nooutlinegreen.png';

const cloudURL = 'https://us-central1-uofthacksvii-265521.cloudfunctions.net/search';

export default class ConvoForm extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [
      {
        'tag': 'input',
        'type': 'text',
        'name': 'imageUrl',
        'cf-questions': 'Welcome! Paste the image URL of your clothing item you want'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'color-choice',
        'cf-questions': 'Thank you! Did you want it in the original color or a different one?',
        'cf-label': 'original',
        'value': 'original'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'color-choice',
        'cf-label': 'different',
        'value': 'diff'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'colorInput',
        'cf-questions': 'Nice, what color would you like to look for?',
        'cf-conditional-color-choice': 'diff',
      },
    ];

    this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        // loadExternalStyleSheet: false
      },
      tags: this.formFields
    });
    this.elem.appendChild(this.cf.el);
  }

  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("Processing your search... <span id='spin'>😎</span>")
    const q = formDataSerialized.colorInput ? formDataSerialized.colorInput : ''

    if (this.props.dev){
      console.log('dev');
      console.log(q)
      console.log(hardData);
      // this.cf.addRobotChatResponse("Done! 🥳");
      this.props.appCallback(hardData, 'https://underarmour.scene7.com/is/image/Underarmour/V5-1216010-001_FC_Main?scl=1&fmt=jpg', q);
    } else {
      console.log(formDataSerialized.colorInput)
      axios({
        method: 'post',
        url: cloudURL,
        header: { 'content-type': 'application/json'},
        data: {
          imageUrl: formDataSerialized.imageUrl,
          q: q
        }
      })
      .then((response) => {
        console.log(response);
        this.cf.addRobotChatResponse("Done! 🥳")
        // TODO: connect to App.js
        this.props.appCallback(response, formDataSerialized.imageUrl, q)
      })
      .catch((error) => {
        // handle error
        console.log(error);
        this.cf.addRobotChatResponse("Oops! Something went wrong 😭")
      })

    }

  }

  render() {
    return (
      <>
        <div id='title-text'>
          <img id='everwear-logo' src={greenlogo}/>
          <p id="welcome-message">We'll help you find the clothes you already want, but from <strong>ethical</strong>, <strong>sustainable</strong> sources.</p>
        </div>
        <div id = "chat" ref={ref => this.elem = ref}>
        </div>
      </>
    );
  }
}
