import React from 'react';

class Form extends React.Component{

  constructor(){
    super();
    this.state = {
      userInput : ''
    }

  }

  handleSubmit = (e) => {
    //callback to the parent component
    if(this.state.userInput !== ''){
      this.props.submit(this.state);
      this.setState({userInput : ''});
    }
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({userInput : e.target.value});

  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit} onChange = {this.handleChange}
          >
        <input type = 'text' value = {this.state.userInput} onChange = {this.handleChange}/>
      </form>
    );
  }

}

export default Form;
