import React, { Component } from "react";
import Header from "./Header";
import SimpleList from "./SimpleList.jsx"
import "./patterns.scss";

class BasicPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bx--grid pattern-container">
        <SimpleList />
      </div>
    );
  }
}

export default BasicPage;
