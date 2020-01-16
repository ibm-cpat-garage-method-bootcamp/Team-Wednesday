import React from 'react';
import PropTypes from 'prop-types';
import defaultCatalog from '../components/DefaultCatalog';
import Checkbox from './Checkbox';

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    console.log(item)
    const isChecked = e.target.checked;
    console.log(isChecked)
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  render() {
    console.log(defaultCatalog[0].item.Name)
    return (
      <React.Fragment>
        {
          defaultCatalog.map(item => (
            <label key={item.Name}>
              <div style={{color: "red"}}>{item.Name}</div>
              <Checkbox name={item.Name} checked={this.state.checkedItems.get(item.Name)} onChange={this.handleChange} />
            </label>
          ))
        }
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;