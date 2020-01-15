import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import Header from "./Header";
import "./patterns.scss";

class SimpleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: 0
    };
  }
  columns = ["name", "amount"]
  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id} onClick={() => this.onRowClick(id)}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            //defaultChecked={this.state.selectedRow === id}
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Icon
              className="bx--structured-list-svg"
              icon={iconCheckmarkSolid}
            />
          </StructuredListCell>
        </div>

        {this.columns.map((column)=>
        <StructuredListCell className="simple-list-row" contentEditable="true">
          {row[column]}
        </StructuredListCell>)}
      </StructuredListRow>
    );
  };

  render() {
    const items = [
      { name: "bananas", amount: "5"},
      { name: "milk", amount: "half gal"},
      { name: "chicken", amount: "2 lbs"}
    ];
    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Simple List"
          subtitle="List of items to buy"
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  <StructuredListCell head>
                    Name
                  </StructuredListCell>
                  <StructuredListCell head>
                    Amount
                  </StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>

              <StructuredListBody>
                {items.map((item,i) => 
                  this.renderRow(item, i))}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleList;
