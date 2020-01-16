import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
// import BasicPage from "../pattern-components/BasicPage"; 
import Catalog from './Catalog';
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
    let curScreen = this.defaultComponent;
    const PatternName = this.components[curScreen];
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} />
      </div>
    );
  }
}
export default UIShellBody;
