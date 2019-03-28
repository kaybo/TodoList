import React from 'react';

class Form extends React.Component{

  constructor(){
    super();
    this.state = {
      userInput : '',
      idCounter : 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    //callback to the parent and gives the whole entire state information
    this.props.submit(this.state);
    this.setState(prevState => ({
      idCounter : prevState.idCounter + 1
    }));
    e.preventDefault();
  }

  handleChange(e){
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
