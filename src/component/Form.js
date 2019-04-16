import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

class Form extends React.Component{

  constructor(){
    super();
    this.state = {
      userInput : ''
    }

  }

  handleSubmit = (e) => {
    //callback to the parent component
    console.log('What am i even typing' + e.target.value);
    if(this.state.userInput !== ''){
      this.props.submit(this.state);
      this.setState({userInput : ''});
    }
    e.preventDefault();
  }

  handleChange = (e) => {
    console.log('im typing this' + e.target.value);
    this.setState({userInput : e.target.value});

  }

  render(){
    return(
      <div>
        <InputGroup size = 'lg' as = 'form'
          onSubmit = {this.handleSubmit} onChange = {this.handleChange}>
          <FormControl aria-label = 'default' as = 'input' className = 'bg-dark text-white'
            value = {this.state.userInput} onChange = {this.handleChange}
            placeholder = 'What would you like to do today?' />
        </InputGroup>
      </div>

    );
  }

}

export default Form;
