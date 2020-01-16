import React, { Component } from 'react'; 
import TableList from '../pattern-components/TableList'; 

class ShoppingList extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 

    }
  }; 

  render() { 
    return ( 
      <div className="catalog-list"> 
        <h1>The items that we need to pick up will go here.</h1>
      </div>
    )
  };


} 

export default ShoppingList; 