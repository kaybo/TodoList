import React from 'react';
import Form from './Form';
import List from './List';


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      listItem : [],
      key : []
    };
    this.updateList = this.updateList.bind(this);
  }

  updateList(updateState){

    //this.setState({test : updateState});
    this.setState(prevState => ({
      listItem : [...prevState.listItem, updateState.userInput]
    }) );
    this.setState(prevState => ({
      key : [...prevState.key, updateState.idCounter]
    }));


  }



  render(){

    // const listString = this.state.listItem;
    // const listItems = listString.map((item) =>
    //     <li>{item}</li>
    // );

    return(
      <div>
        <Form submit = {this.updateList} />
        <List keyList = {this.state}/>

      </div>
    );
  }
}

export default App;
