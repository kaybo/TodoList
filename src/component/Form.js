import React from 'react';

class Form extends React.Component{

  constructor(){
    super();
    this.state = {
      userInput : '',
      uniqueID : 0
    }

  }

  handleSubmit = (e) => {
    this.setState(prevState => ({
      uniqueID : prevState.uniqueID + 1
    }));
    //callback to the parent component
    this.props.submit(this.state);
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({userInput : e.target.value});

  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit} onChange = {this.handleChange}
          >
        <input type = 'text' />
      </form>
    );
  }

}

export default Form;
