import React, { Component } from 'react'; 
import TableList from '../pattern-components/TableList'; 

class Catalog extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 

    }
  }; 

  render() { 
    return ( 
      <div className="catalog-list"> 
        <TableList> 
          
        </TableList>
      </div>
    )
  };


} 

export default Catalog; 