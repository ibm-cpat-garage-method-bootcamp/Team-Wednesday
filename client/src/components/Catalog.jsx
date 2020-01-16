import React, { Component } from 'react'; 
import TableList from '../pattern-components/TableList'; 
import UpdateForm from '../pattern-components/UpdateForm'; 

class Catalog extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 

    }
  }; 

  render() { 
    return ( 
      <div className="catalog-list"> 
        <TableList  defaultCatalog={this.props.defaultCatalog}/> 
        <UpdateForm />
      </div>
    )
  };


} 

export default Catalog; 