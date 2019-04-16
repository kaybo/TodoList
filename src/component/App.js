import React from 'react';
import Form from './Form';
import List from './List';
import {Button, Container, Row, Col} from 'react-bootstrap';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      counterID : 0,
      listItem : []};

  }

  updateList = (updateState) => {

    console.log('debug ' + updateState.userInput);
    //finding an unique id. First must search through the listitem to see which
    //ids are already taken
    // const values = Object.values(this.state.listItem);
    let newUniqueIDFlag = this.state.counterID;
    // let tempVar1 ;
    // let tempVar2;
    // let displacement;
    // let tempFlag = 0;
    // if(this.state.listItem.length > 1){
    //   for(let i = 0 ; i < this.state.listItem.length - 1 ; i++){
    //     tempVar1 = this.state.listItem[i].id;
    //     tempVar2 = this.state.listItem[i+1].id;
    //     displacement = tempVar2 - tempVar1;
    //     if(displacement > 1){
    //       newUniqueIDFlag = tempVar1 + 1;
    //       tempFlag = 1;
    //       break;
    //     }
    //   }
    //   if(tempFlag === 0){
    //       newUniqueIDFlag = tempVar2 + 1;
    //   }
    //   console.log('this is newUniqueIDFlag ' + newUniqueIDFlag);
    //   console.log('current state: ' + this.state.listItem.);
    // }else if (this.state.listItem.length === 1){
    //   newUniqueIDFlag = 2;
    // }else{
    //   newUniqueIDFlag = 1;
    // }

    this.setState({
      counterID: this.state.counterID + 1
    },() => {
      let newObjectItem = {
        id: newUniqueIDFlag,
        title: updateState.userInput,
        completed: 'false' };
        this.setState(prevState => ({
          listItem: [...prevState.listItem, newObjectItem]
        }));
    });
  }

  deleteList = (deleteItem) => {
    console.log('this is deleted item: ' + deleteItem);
    for(let i = 0 ; i < this.state.listItem.length ; i++){
      console.log('looping: ' + this.state.listItem[i].id);
      if(deleteItem == this.state.listItem[i].id){
        let convertNumber = this.state.listItem[i].id;
        let newListItem = this.state.listItem.filter(function(items){
          return items.id !== convertNumber
        });
        this.setState({listItem: newListItem});
      }
    }
  }


  render(){


    return(
      <div>
        <Container>

          <h1  className = 'text-center display-1 text-white' >Todos</h1>
          <Row >
            <Col sm = {12}>
              <Form  submit = {this.updateList} />
            </Col>
          </Row>
          <Row>
            <Col sm = {12}>
              <List keyList = {this.state} submit = {this.deleteList}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
