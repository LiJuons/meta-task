import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Dropdown.scss';

class Dropdown extends Component {
  state = {
    groupsHovered: false
  }

  render() {
    return (
      <div className="dropdown-container">
    
        <div id="arrow-up-border" />
        { !this.state.groupsHovered && <div id="arrow-up" /> }
    
        <div className="dropdown-content">
          <div className="drop-item" 
            onMouseEnter={() => this.setState({groupsHovered: true})}
            onMouseLeave={() => this.setState({groupsHovered: false})}
          >
            <FontAwesomeIcon icon={['fas','users']} className="drop-ico" />
            Groups
          </div><div className="drop-separator" />
    
          <div className="drop-item">
            <FontAwesomeIcon icon={['fas','comments']} className="drop-ico" />
            Frequently contacted
          </div><div className="drop-separator" />
    
          <div className="drop-item">
            <FontAwesomeIcon icon={['fas','wrench']} className="drop-ico" />
            Preferences
          </div><div className="drop-separator" />
    
          <div className="drop-item">
            <FontAwesomeIcon icon={['fas','power-off']} className="drop-ico" />
            Log out
          </div>
        </div>
      </div>
    )
  }
} 

export default Dropdown;