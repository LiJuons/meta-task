import React, { Component } from 'react';
import UserPic from '../../../assets/userpic.jpg';
import './UserInfo.scss';

class UserInfo extends Component {
  state={}
  render() {
    const {user} = this.props;
    
    return (
      <div className="userinfo-container" >

        <img src={UserPic} alt="User" className="user-pic" />

        <div className="user-info">
          <div>
            <div className="info-type">Name:</div>
            <div className="info-data">{user.name}</div>
          </div>
          <div>
            <div className="info-type">Surname:</div>
            <div className="info-data">{user.surname}</div>
          </div>
          <div>
            <div className="info-type">City:</div>
            <div className="info-data">{user.city}</div>
          </div>
          <div>
            <div className="info-type">Email:</div>
            <div className="info-data info-email"><a href={`mailto:${user.email}`}>{user.email}</a></div>
          </div>
          <div>
            <div className="info-type">Phone:</div>
            <div className="info-data">{user.phone}</div>
          </div>
        </div>

      </div>
    );
  }
}

export default UserInfo;