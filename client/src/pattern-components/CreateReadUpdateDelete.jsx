import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon,
  Button
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import Header from "./Header";
import ValidatingForm from "./ValidatingForm";
import Checkbox from './Checkbox' 
import "./patterns.scss";

class CreateReadUpdateDelete extends Component {
  constructor(props) {
    super(props);
    const data = [
      [
        { label: "Name", value: "Banana", type: "textinput" },
        { label: "Amount", value: "5 lbs", type: "textinput" },
        { label: "Comments", value: "Fresh Bananas! Want them to be green.", type: "textinput" },
        { label: "Needed", value: false, type: "boolean" }
      ],
      [
        { label: "Name", value: "Tortilla", type: "textinput" },
        { label: "Amount", value: "20 ct", type: "textinput" },
        { label: "Comments", value: "HEB brand ONLY", type: "textinput" },
        { label: "Needed", value: false, type: "boolean" }
      ],
      [
        { label: "Name", value: "Flour", type: "textinput" },
        { label: "Amount", value: "5 lbs", type: "textinput" },
        { label: "Comments", value: "If it ain't flour, it's gonna be sour.", type: "textinput" },
        { label: "Needed", value: false, type: "boolean" }
      ],
      [
        { label: "Name", value: "Olives", type: "textinput" },
        { label: "Amount", value: "3.4 oz", type: "textinput" },
        { label: "Comments", value: "Pitted please. ", type: "textinput" },
        { label: "Needed", value: false, type: "boolean" }
      ]
    ];
    this.state = {
      selectedRow: 0,
      data,
      adding: false
    };
  }

  convertData = inputData => {
    let output = {};
    inputData.forEach(dataRow => {
      output[dataRow.label] = dataRow.value;
    });
    return output;
  };

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  addRow = () => {
    let data = this.state.data.slice();
    let selectedRow = this.state.data.length;
    data[selectedRow] = [
      { label: "Name", value: "Enter data below", type: "textinput" },
      { label: "Amount", value: "", type: "textinput" },
      { label: "Comments", value: "", type: "textinput" }
    ];
    this.setState({ data, selectedRow, adding: true });
  };

  deleteRow = () => {
    let data = this.state.data.slice();
    if (data.length > 0) {
      data.splice(this.state.selectedRow, 1);
      this.setState({ data, selectedRow: 0 });
    }
  };

  updateRow = newData => {
    let data = this.state.data.slice();
    let selectedRow = this.state.selectedRow;
    data[selectedRow] = [
      { label: "Name", value: newData.name, type: "textinput" },
      { label: "Amount", value: newData.amount, type: "textinput" },
      { label: "Comments", value: newData.comments, type: "textinput" }
    ];
    this.setState({ data });
  };

  toggleAdding = () => {
    const adding = this.state.adding;
    this.setState({ adding: !adding });
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
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Checkbox checked={this.state.data[id].Needed} onChange={() => {
                const dataCopy = [...this.state.data];
                const needed = dataCopy[id].find(a=>a.label==="Needed");
                needed.value = !needed.value;
                console.log('data copy',dataCopy);
                // this.displayListFromCheckbox(dataCopy);
                this.setState({data:dataCopy});
              }}/>
          </StructuredListCell>
          
        </div>
        {Object.keys(row).map(col => {
          return (
            <StructuredListCell key={col} className="simple-list-row">
              {row[col]}
            </StructuredListCell>
          );
        })}
      </StructuredListRow>
    );
  };

  render() {
    const selectedRow = this.state.selectedRow;
    const data = this.state.data;
    const columns = data.length ? data[selectedRow].map(item => item.label)
      : [];

    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Catalog"
          subtitle="Items"
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <StructuredListWrapper selection border>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head />
                  {columns.map(key => {
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
                  const values = row.map(item => item.value);
                  return this.renderRow(values, i);
                })}
              </StructuredListBody>
              <StructuredListBody>
                <StructuredListRow>
                {
                  this.state.data.filter(d=>d.find(d=>d.label==="Needed"&&d.value)).map((d)=>{
                    return this.convertData(d)
                  }).map(d=>(
                     <p id="listText" style={{display:`block`}}>{d.Amount} of {d.Name}</p>
                  ))
                }
                </StructuredListRow>
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        </div>
        <div className="bx--row left-align">
          <div className="bx--col-xs-12">
            <Button className="add-delete-row-buttons" onClick={this.addRow}>
              Add Row
            </Button>
            <Button className="add-delete-row-buttons" onClick={this.deleteRow}>
              Delete Row
            </Button>
          </div>
        </div>
        <br />
        <br />
        {data.length > 0 && (
          <div className="bx--row">
            <div className="bx--col-xs-12">
              <ValidatingForm
                data={data[selectedRow]}
                updateRow={this.updateRow}
                adding={this.state.adding}
                toggleAdding={this.toggleAdding}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CreateReadUpdateDelete;
