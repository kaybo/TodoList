import React from 'react';

class List extends React.Component{

  constructor(){
    super();
    this.state = {};

  }

  handleClick = (e) => {
    console.log(e.target.id);
    this.props.submit(e.target.id);
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
        <li onClick = {this.handleClick} key = {items.id} id = {items.id}>
          <input type = "checkbox" checked = {false} onChange = {this.handleChange}/>{items.title}
        </li>
      )
    }

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
