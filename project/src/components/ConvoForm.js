import React from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import { ConversationalForm } from 'conversational-form';
import './ConvoForm.css';

export default class ConvoForm extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'imageRadio',
        'cf-questions': 'Do you have an image URL of a clothing item you want?',
        'cf-label': 'Yes',
        'value': 'yes'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'imageRadio',
        'cf-label': 'No',
        'value': 'no'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'imageUrl',
        'cf-conditional-imageRadio': 'yes',
        'cf-questions': 'Cool! Paste the image URL below'
      },
      {
        'tag': 'input',
        'type': 'radio',
        'name': 'clothingCategory',
        'cf-conditional-imageRadio': 'no',
        'cf-questions': 'That\'s ok! What kind of clothing item were you looking for?',
        'cf-label': 'Top',
      },
      {
        'tag': 'input',
        'type': 'radio',
        'cf-conditional-imageRadio': 'no',
        'name': 'clothingCategory',
        'cf-label': 'Pants',
      },
       {
        'tag': 'input',
        'type': 'radio',
        'cf-conditional-imageRadio': 'no',
        'name': 'clothingCategory',
        'cf-label': 'Shoes',
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
    this.cf.addRobotChatResponse("Processing your search... 😎")
  }

  render() {
    return (
      <div id = "chat">
        <div id = "chat2"
          ref={ref => this.elem = ref}
        />
      </div>
    );
  }
}
