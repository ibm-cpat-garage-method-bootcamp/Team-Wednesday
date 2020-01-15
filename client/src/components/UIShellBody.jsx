import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
// import BasicPage from "../pattern-components/BasicPage"; 
import Catalog from './Catalog';
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
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
