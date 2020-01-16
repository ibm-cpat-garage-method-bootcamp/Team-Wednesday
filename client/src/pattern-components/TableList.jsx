import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput
} from "carbon-components-react";
import Header from "./Header";
import CheckboxContainer from "./CheckboxContainer";
import "./patterns.scss";

class TableList extends Component {
  title = 'Catalog';
  subtitle = 'This list displays your frequently used items.';

  columns = ['Are We Out?', 'Name', 'Size', 'Comments']; 

  formatters = {
    'ZipCode': function(val) {
      return val + '-0000';
    }
  };

  data = [
    {
      Needed: false,
      Name: "Olives",
      Size: "3.5 oz", 
      Comments: "Pitted please. "
    },
    {
      Needed: false,
      Name: "Bananas",
      Size: "1 LB",
      Comments: "Fresh Bananas! Want them to be green."
    },
    {
      Needed: false,
      Name: "Coca-Cola",
      Size: "12 Pack", 
      Comments: ""
    }
  ]; 

  catalogSorter(catalog) { 
    if (Array.isArray(catalog)) { 
      return catalog.sort((a, b) => (a.Name > b.Name) ? 1 : -1); 
    }
  }; 

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedRow: 0,
    };
  }

  async componentDidMount() {

    this.setState({
      data: this.data,
    })
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  displayListFromCheckbox() {
    let checkBox = document.getElementById("checkbox");
    let displayList = document.getElementById("listText");

    if (checkBox.checked === true){
      displayList.style.display = "block";
    } else {
      displayList.style.display = "none";
    }
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
            
          />
          <StructuredListCell>
            <CheckboxContainer/>
          </StructuredListCell>
        </div>
        {this.columns.map(col => {
          const format = this.formatters[col] || function(val) { return val; };

          return (
            <StructuredListCell key={col} className="simple-list-row" contentEditable="true">
              {format(row[col])}
            </StructuredListCell>
          );
        })}
      </StructuredListRow>
    );
  };

  render() {
    const data = this.catalogSorter(this.state.data); 
    // console.log('test', this.catalogSorter(data))
    // data = this.catalogSorter(data);
    
    return (
      <div className="bx--grid pattern-container">
        <Header
          title={this.title}
          subtitle={this.subtitle}
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  {this.columns.map(key => {
                    return (
                      <StructuredListCell head key={key}>
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1")}
                      </StructuredListCell>
                    );
                  })}
                </StructuredListRow>
              </StructuredListHead>
              
              <StructuredListBody>
                {data.map((row, i) => {
                  return this.renderRow(row, i);
                })}
              </StructuredListBody>
              <StructuredListBody>
                <p id="listText" style={{display:`none`}}>Hello World</p>
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default TableList;
