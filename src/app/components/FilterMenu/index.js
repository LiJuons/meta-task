import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FilterMenu.scss';

class FilterMenu extends Component {
  state={
    name: '',
    city: '',
    showActive: false
  }

  encodeHTML = (s) => (s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'));

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    const {name, city, showActive} = this.state;
    const sanitarizedName = this.encodeHTML(name);
    this.props.filterUsers(sanitarizedName, city, showActive);
  }

  callSubmit = (e) => {if (e.keyCode===13) this.handleSubmit()};

  render() {
    const {name, city, showActive} = this.state;
    
    return (
      <div className="filterMenu-container">

          <input 
            type='text' 
            id="filter-name" 
            placeholder="Name"
            tabIndex={2}
            name="name"
            value={name}
            onChange={this.handleChange}
            onKeyUp={this.callSubmit}
          />

          <select  
            id="filter-city" 
            name="city"
            value={city}
            onChange={this.handleChange}
            options={this.props.cityList}
            style={city==='' ? {color: 'gray'} : {}}
            onKeyUp={this.callSubmit}
          >
            <option key="null" value='' >
              City
            </option>
            {
              this.props.cityList.map(option => (
                <option key={option} value={option}>{option}</option>
              ))
            }
          </select>
          <FontAwesomeIcon icon={['fas','caret-down']} className="select-svg" />

          <div className="active-check-box">
            <input 
              type="checkbox" 
              id="filter-active"
              name="showActive"
              checked={showActive}
              onChange={this.handleChange}
              onKeyUp={this.callSubmit}
            />
            {
              showActive && 
              <FontAwesomeIcon 
                icon={['fas','check']} 
                className="checkmark" 
                onClick={() => this.setState({showActive: false})}
              />
            }
            <label htmlFor="showActive">Show active</label>
          </div>

          <input 
            type="submit" 
            value="FILTER" 
            className="filter-button" 
            onClick={this.handleSubmit}
          />
          
          <div className="add-button">
            <div className="add-button-plus">
              <FontAwesomeIcon icon={['fas','plus']} className="plus-svg" />  
            </div>
            <div>Add new contract</div>
          </div>

      </div>
    );
  }
}

export default FilterMenu;