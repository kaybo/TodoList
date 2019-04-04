import React from 'react';

class List extends React.Component{

  constructor(){
    super();
    this.state = {};

  }

  handleClick = () => {
    console.log('working!');
  }

  handleChange = () => {
    console.log('checkbox is working');
  }

  handleDelete = () => {

  }

  render(){

    const listArr = this.props.keyList.listItem;
    const listItems = listArr.map((items) =>
      <li onClick = {this.handleClick} key = {items.id}>
        <input type = "checkbox" checked = {false} onChange = {this.handleChange}/>{items.title}
      </li>
    );




    //console.log('testing ' + this.props.items);
    return(
      <div>
        <ul>{listItems}</ul>
      </div>

    );
  }
}

export default List;
