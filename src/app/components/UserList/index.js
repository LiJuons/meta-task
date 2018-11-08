import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserList.scss';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.titles = ['name', 'surname', 'city', 'email', 'phone'];
    this.state={
      selectedItem: 3
    }
  }

  handleSelect = (identifier) => {
    this.setState({selectedItem: identifier});
    this.props.displayInfo(identifier);
  }

  handleSortUsers = (sortKey) => {
    this.props.sortUsers(sortKey);
  }

  render() {
    const {selectedItem} = this.state;
    const {sortedBy, contacts} = this.props;

    return (
      <div className="userlist-container" >
        <div className="column-titles" >
          {
            this.titles.map(title => (
              <div 
                key={title}
                className={`title-${title}`} 
                onClick={() => this.handleSortUsers(title)}
                style={sortedBy==='phone' ? {justifyContent: "space-between"} : {}}
              > 
                { title!=='phone' && title[0].toUpperCase() + title.slice(1)}
                {
                  sortedBy===title && <FontAwesomeIcon icon={['fas','arrow-down']} className="arr-down-svg" />
                }
                { title==='phone' && title[0].toUpperCase() + title.slice(1)}
              </div>
            ))
          }
          <div className="filling-title"/>
        </div>

        
        {
          contacts.map(item => (
            <div 
              className={(selectedItem===item.id) ? "contacts-item contacts-item-selected" : "contacts-item"} 
              key={item.id}
              onClick={() => this.handleSelect(item.id)}
            >
              <div className="data-name">
                <FontAwesomeIcon 
                  icon={item.active ? ['far','eye'] : ['far','eye-slash']} 
                  className="eye-svg" 
                />
                {item.name}
              </div>
              <div className="data-surname">{item.surname}</div>
              <div className="data-city">{item.city}</div>
              <div className="data-email">{item.email}</div>
              <div className="data-phone">{item.phone}</div>
              <div className="data-options">
                <FontAwesomeIcon icon={['fas','pen']} className="pen-svg" />
                <FontAwesomeIcon icon={['fas','trash-alt']} className="trash-svg" />
              </div>
            </div>
          ))
        }

      </div>
    );
  }
}

export default UserList;