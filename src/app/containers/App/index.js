import React, { Component } from 'react';
import './App.scss';
import Header from '../../components/Header';
import Contacts from '../Contacts';
import Footer from '../../components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { 
  faSearch, 
  faUser, 
  faCaretDown, 
  faUsers, 
  faComments, 
  faWrench, 
  faPowerOff,
  faCheck,
  faPlus,
  faArrowDown,
  faPen,
  faTrashAlt,
  faCloudUploadAlt,
  faSyncAlt,
  faStethoscope
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faUserCircle, 
  faSearch, 
  faUser, 
  faCaretDown, 
  faUsers, 
  faComments, 
  faWrench,
  faPowerOff,
  faCheck,
  faPlus,
  faArrowDown,
  faEye,
  faEyeSlash,
  faPen,
  faTrashAlt,
  faCloudUploadAlt,
  faSyncAlt,
  faStethoscope
);

class App extends Component {
  state = {
    activeLink: 2
  }

  handleActiveLinkChange = (num) => {this.setState({activeLink: num})};

  render() {
    return (
      <div className="App-container">
        <Header 
          activeLinkChanged={this.handleActiveLinkChange} 
          activeLink={this.state.activeLink}
        />
        <Contacts />
        <Footer activeLinkChanged={this.handleActiveLinkChange} />
      </div>
    );
  }
}

export default App;
