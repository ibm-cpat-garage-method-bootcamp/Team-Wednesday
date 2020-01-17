import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
// import BasicPage from "../pattern-components/BasicPage"; 
import Catalog from './Catalog';
import CreateReadUpdateDelete from '../pattern-components/CreateReadUpdateDelete'
import "../pattern-components/patterns.scss";

class UIShellBody extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      defaultCatalog: this.defaultCatalog
    }
  };  

  defaultCatalog = [
    {item : {
      Name : "Olives",
      Size : "3.5 oz", 
      Comments : "Pitted please. "
    }},
    {item : {
      Name: "Bananas",
      Size: "1 LB",
      Comments: "Fresh Bananas! Want them to be green."
    }},
    {item : {
      Name: "Coca-Cola",
      Size: "12 Pack", 
      Comments: ""
    }}
  ]; 

  components = {
    "Simple List": SimpleList,
    "Catalog": Catalog
  };
  defaultComponent = "Catalog";

  render() {
    
    return (
      <div className="pattern-container">
        
        <CreateReadUpdateDelete/>
      </div>
    );
  }
}
export default UIShellBody;
