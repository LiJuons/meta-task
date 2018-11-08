import React, { Component } from 'react';
import contactify from '../../../assets/contactify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import Dropdown from '../Dropdown';

class Header extends Component {
  state={
    dropDown: false,
    searchText: ''
  }

  changeActiveLink = (num) => {
    this.props.activeLinkChanged(num);
  }

  handleChange = (evt) => {
    this.setState({searchText: evt.target.value});
  }

  render() {
    const {dropDown, searchText} = this.state;
    const {activeLink} = this.props;
    return (
      <div className="header-container">

        <div className="header-container-left">
          <div className="contactify" >
            <img src={contactify} className="contactify-img" alt="contactify" />
            <FontAwesomeIcon icon={['far','user-circle']} className="i-svg" />
          </div>

          <div className="menu" >
            <div 
              className={activeLink===1 ? 'menu-active menu-item' : 'menu-item'}
              onClick={() => this.changeActiveLink(1)}
            >dashboard</div>

            <div className="separator" />

            <div 
              className={activeLink===2 ? 'menu-active menu-item' : 'menu-item'}
              onClick={() => this.changeActiveLink(2)}
            >contacts</div>

            <div className="separator" />

            <div
            className={activeLink===3 ? 'menu-active menu-item' : 'menu-item'}
            onClick={() => this.changeActiveLink(3)}
            >notifications</div>
          </div>

          <div>
            <input 
              type='text' 
              className="search-input" 
              placeholder="Search" 
              tabIndex={1}
              value={searchText}
              onChange={this.handleChange}
              onKeyUp={(e) => {if (e.keyCode===13) this.setState({searchText: ''})}}
            />
            <div id="search-ico-box">
              <div className="separator" id="search-separator" />
              <FontAwesomeIcon icon={['fas','search']} className="search-svg" />
            </div>
          </div>
        </div>

        <div tabIndex="0" 
          className="header-container-right"
          onBlur={() => this.setState({dropDown: false})} 
        >
          <div  
            className="dropdown-button" 
            onClick={() => this.setState({dropDown: !dropDown})}
          >
            <FontAwesomeIcon icon={['fas','user']} className="user-svg" />
            <div>Jorah Mormont</div>
            <FontAwesomeIcon icon={['fas','caret-down']} className="cdown-svg" />
          </div>
          { 
            dropDown && <Dropdown />
          }
        </div>
        
      </div>
    );
  }
}

export default Header;