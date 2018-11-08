import React, { Component } from 'react';
import orderBy from 'lodash/orderBy';
import FilterMenu from '../../components/FilterMenu';
import UserInfo from '../../components/UserInfo';
import UserList from '../../components/UserList';
import contacts from '../../../assets/contacts.json';
import './Contacts.scss';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedUser: 3,
      userList: contacts || [],
      sortedBy: 'name'
    }
  }

  componentWillMount() {
    this.cityList = contacts.map(item => item.city);
    this.cityList = [ ...new Set(this.cityList) ];
  }

  componentDidMount() {
    this.handleSort('name');
  }

  handleDisplayUser = (id) => {
    this.setState({selectedUser: id});
  }

  handleFilterUsers = (name, city, isActive) => {
    const filteredList = contacts.filter(user => {
      if ((isActive === true && isActive===user.active)||(!isActive)){
        if (name === '' || user.name.toLowerCase().includes(name.toLowerCase())) {
          if (city === '' || user.city.toLowerCase().includes(city.toLowerCase())) {
            return user;
          }
        }
      }
      return null;
    });

    this.setState({userList: filteredList, sortedBy: ''});  
  }

  handleSort = (sortKey) => {
    const sortedList = orderBy(this.state.userList, sortKey, 'asc');
    this.setState({userList: sortedList, sortedBy: sortKey});
  }

  render() {    
    const {userList, selectedUser, sortedBy} = this.state;    
    return (
      <div className="contacts-container">

        <FilterMenu 
          cityList={this.cityList} 
          filterUsers={this.handleFilterUsers}
        />

        <div className="users-container" >
          <UserInfo user={contacts[selectedUser-1]} />
          <UserList 
            contacts={userList}  
            sortedBy={sortedBy}
            displayInfo={this.handleDisplayUser}
            sortUsers={this.handleSort}
          />
        </div>

      </div>
    );
  }
}

export default Contacts;