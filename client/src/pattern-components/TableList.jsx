import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  // Checkbox
} from "carbon-components-react";
import Header from "./Header";
import "./patterns.scss";
import Checkbox from './Checkbox' 

class TableList extends Component {
  title = 'Catalog';
  subtitle = 'This list displays your frequently used items.';

  columns = ['Are We Out?', 'Name', 'Size', 'Comments']; 

  formatters = {
    'ZipCode': function(val) {
      return val + '-0000';
    }
  };


  catalogSorter(catalog) { 
    if (Array.isArray(catalog)) { 
      return catalog.sort((a, b) => (a.Name > b.Name) ? 1 : -1); 
    }
  }; 

  constructor(props) {
    super(props);
    this.state = {
      data: [
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
          Name: "Bread flour",
          Size: "5 lbs", 
          Comments: ""
        },
        {
          Needed: false,
          Name: "Tortillas",
          Size: "20 ct", 
          Comments: ""
        },
        {
          Needed: false,
          Name: "Milk",
          Size: "Half gal", 
          Comments: "Promise Land"
        }
      ],
      selectedRow: 0,
    };
  }

  async componentDidMount() {

    // this.setState({
    //   data: this.data,
    // })
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };


  renderRow = (row, id) => {
    return (
      <StructuredListRow key={id} onClick={() => this.onRowClick(id)}>

          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            //defaultChecked={this.state.selectedRow === id}
            
          />
          <StructuredListCell>
            <Checkbox checked={this.state.data[id].Needed} onChange={() => {
                const dataCopy = [...this.state.data];
                dataCopy.splice(id,1,{...dataCopy[id], Needed:!dataCopy[id].Needed});
                console.log('data copy',dataCopy);
                // this.displayListFromCheckbox(dataCopy);
                this.setState({data:dataCopy});
              }}/>
          </StructuredListCell>
      
        {this.columns.map(col => {
          const format = this.formatters[col] || function(val) { return val; };

          return (
            <StructuredListCell key={col} className="simple-list-row">
              {format(row[col])}
            </StructuredListCell>
          );
        })}
      </StructuredListRow>
    );
  };

  render() {
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
                {this.state.data.map((row, i) => {
                  return this.renderRow(row, i);
                })}
              </StructuredListBody>
              <StructuredListBody>
                <StructuredListRow>
                {
                  this.state.data.filter(d=>d.Needed).map(d=>(
                    <p id="listText" style={{display:`block`}}>{d.Size} of {d.Name}</p>
                  ))
                }
                </StructuredListRow>
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default TableList;