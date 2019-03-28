import React from 'react';

class List extends React.Component{

  constructor(){
    super();
    this.state = {};

  }

  handleClick(){
    console.log('working!');
  }



  render(){

    const listString = this.props.keyList.listItem;
    const listItems = listString.map((items) =>
      <li onClick = {this.handleClick}>{items}</li>
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
