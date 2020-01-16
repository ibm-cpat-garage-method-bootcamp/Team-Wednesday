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

class TableList extends Component {
  title = 'Catalog';
  subtitle = 'This list displays your frequently used items.';

  columns = ['Name', 'Size', 'Comments']; 

  formatters = {
    'ZipCode': function(val) {
      return val + '-0000';
    }
  };

  // data = [
  //   {
  //     Name: "Olives",
  //     Size: "3.5 oz", 
  //     Comments: "Pitted please. "
  //   },
  //   {
  //     Name: "Bananas",
  //     Size: "1 LB",
  //     Comments: "Fresh Bananas! Want them to be green."
  //   },
  //   {
  //     Name: "Coca-Cola",
  //     Size: "12 Pack", 
  //     Comments: ""
  //   }
  // ]; 

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
      data: this.state.data,
    })
  }

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
          </StructuredListCell >
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
    const data = this.catalogSorter(this.props.defaultCatalog); 
    console.log(typeof this.props.defaultCatalog);
    console.log('testing if prop has been passed down', this.props.defaultCatalog);
    console.log('testing if prop is in alphabetical order', data); 
    
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
                {data && data.map((row, i) => {
                  return this.renderRow(row, i);
                })}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default TableList;