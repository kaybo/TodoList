import React from 'react';
import Form from './Form';
import List from './List';


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      listItem : [
        {
          id: 1,
          title: 'complete this tutorial',
          completed: 'false'
        },
        {
          id: 2,
          title: 'wake up on time',
          completed: 'false'
        }
      ]};

  }

  updateList = (updateState) => {

    console.log('debug ' + updateState.userInput);
    //finding an unique id. First must search through the listitem to see which
    //ids are already taken
    const values = Object.values(this.state.listItem);
    console.log('what am i doing ');
  }



  render(){


    return(
      <div>
        <Form submit = {this.updateList} />
        <List keyList = {this.state}/>

      </div>
    );
  }
}

export default App;
