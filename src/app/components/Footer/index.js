import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

const Footer = (props) => (
  <div className="footer-container">

    <div className="sectionA">
      <div 
        className="sectionA-col sectionA-link"
        onClick={() => props.activeLinkChanged(1)}
      >Dashboard</div>
      <div 
        className="sectionA-col sectionA-link"
        onClick={() => props.activeLinkChanged(2)}
      >Contacts</div>
      <div 
        className="sectionA-col sectionA-link"
        onClick={() => props.activeLinkChanged(3)}
      >Notifications</div>

      <div className="sectionA-row">
        <div>© 2015 Contactify</div>
        <div className="sectionA-link">About</div>
        <div className="sectionA-link">Privacy</div>
      </div>
    </div>

    <div className="sectionB">
      <div className="sectionB-sync">
        <div className="sectionB-sync-left">
          <FontAwesomeIcon icon={['fas','cloud-upload-alt']} className="cloud-svg" />
          <div>Last synced:<br/>2015-06-02 14:33:10</div>
        </div>
        <div className="sectionB-sync-right">
          <FontAwesomeIcon icon={['fas','sync-alt']} className="sync-svg" />
          Force sync
        </div>
      </div>
      <div className="sectionB-helpdesk">
        <FontAwesomeIcon icon={['fas','stethoscope']} className="stet-svg" />
        Help desk and Resolution center available:<br/> 
        I–IV 8:00–18:00, V 8:00–16:45
      </div>
    </div>

    <div className="sectionC">
      <div>Groups</div>
      <div>Frequently contacted</div>
      <div>Preferences</div>
      <div>Log out</div>
    </div>

  </div>
);

export default Footer;