import React, { Component } from "react";
import {
  TextInput,
  Form,
  DropdownV2,
  Button,
  Tile
} from "carbon-components-react";
import Header from "./Header";
import "./patterns.scss";

let checkFlag = true;

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToSave: {},
      name: "",
      size: "",
      comments: "",
    };
  }

  componentDidMount() {
    let dataToSave = {
      name: this.state.name,
      size: this.state.size,
      comments: this.state.comments,
    };
    this.setState({ dataToSave });
  }

  saveData = event => {
    const target = event.target;
    let fieldName = target.name;
    let fieldValue = target.value;
    if (!fieldValue) {
      this.setState({ [fieldName]: fieldValue, [fieldName + "Invalid"]: true });
    } else {
      this.setState({
        [fieldName]: fieldValue,
        [fieldName + "Invalid"]: false
      });
    }
  };

  saveDataDropdown1 = ({ selectedItem }) => {
    this.setState({ state: selectedItem, stateInvalid: false });
  };

  saveDataDropdown2 = ({ selectedItem }) => {
    this.setState({ country: selectedItem, countryInvalid: false });
  };

  checkForm = () => {
    checkFlag = true;
    if (!this.state.name) {
      this.setState({ nameInvalid: true });
      checkFlag = false;
    }
    if (!this.state.size) {
      this.setState({ sizeInvalid: true });
      checkFlag = false;
    }
    // if (!this.state.comments) {
    //   this.setState({ commentInvalid: true });
    //   checkFlag = false;
    // }
    // if (!this.state.state) {
    //   this.setState({ stateInvalid: true });
    //   checkFlag = false;
    // }
    // if (
    //   !this.state.zipCode ||
    //   (this.state.country === "United States" &&
    //     !/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.zipCode))
    // ) {
    //   this.setState({ zipCodeInvalid: true });
    //   checkFlag = false;
    // }
    // if (!this.state.country) {
    //   this.setState({ countryInvalid: true });
    //   checkFlag = false;
    // }
    return checkFlag;
  };

  saveForm = event => {
    event.preventDefault();
    if (this.checkForm()) {
      let dataToSave = {
        name: this.state.name,
        size: this.state.size,
        comments: this.state.comments,
        // state: this.state.state,
        // zipCode: this.state.zipCode,
        // country: this.state.country
      };
      this.setState({ dataToSave });
    }
  };

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header
          title="Add to your list!"
          // subtitle="Update form is based on the Display
          //   Form pattern but will display model data and then validate ready for
          //   it to be updated."
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <Tile>
              <Form>
                <TextInput
                  id="name"
                  name="name"
                  value={this.state.name || ""}
                  onChange={this.saveData}
                  labelText="Name"
                  maxLength="100"
                  invalid={this.state.nameInvalid}
                  invalidText="Please enter a name.."
                />
                <br />
                <br />
                <TextInput
                  id="item-size"
                  name="size"
                  value={this.state.size || ""}
                  onChange={this.saveData}
                  labelText="Size"
                  maxLength="200"
                  invalid={this.state.sizeInvalid}
                  invalidText="Please enter item size.."
                />
                <br />
                <br />
                <TextInput
                  id="item-comments"
                  name="comments"
                  value={this.state.comments || ""}
                  onChange={this.saveData}
                  labelText="Comments"
                  maxLength="100"
                  invalid={this.state.commentInvalid}
                  invalidText="Please enter a comment.."
                />
                <br />
                <br />
                <div className="left-align">
                  <Button onClick={this.saveForm}>Update</Button>
                </div>
              </Form>
            </Tile>
          </div>
        </div>
        <br />
        <br />
        {Object.keys(this.state.dataToSave).length > 0 && (
          <div className="bx--row">
            <div className="bx--col-xs-12 left-align">
              {/* <Tile>
                {Object.keys(this.state.dataToSave).map(item => (
                  <p key={item}>
                    &nbsp;&nbsp;
                    <strong>
                      {item.charAt(0).toUpperCase() +
                        item.slice(1).replace(/([A-Z])/g, " $1")}
                      :
                    </strong>{" "}
                    {this.state.dataToSave[item]}
                  </p>
                ))}
              </Tile> */}
              <br />
              <br />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default UpdateForm;
