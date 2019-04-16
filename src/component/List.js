import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class List extends React.Component{

  constructor(){
    super();
    this.state = {};

  }

  handleClick = (e) => {
    //console.dir('this is handle click from onclick: ' + e.target.getAttribute('idkey'));
    this.props.submit(e.target.getAttribute('idkey'));
  }

  handleChange = () => {
    //console.log('checkbox is working');
  }

  handleDelete = () => {

  }

  render(){

    const listArr = this.props.keyList.listItem;
    const listItems = listArr.map((items) => {
      return(
        <ListGroup.Item variant = 'info' as = 'li'
        onClick = {this.handleClick} key = {items.id} idkey = {items.id}>
          {items.title}
        </ListGroup.Item>
      )
    }

    );




    //console.log('testing ' + this.props.items);
    return(
      <ListGroup as = 'ul'>
        <ListGroup>{listItems}</ListGroup>
      </ListGroup>

    );
  }
}

export default List;
