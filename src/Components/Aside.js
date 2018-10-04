import React from 'react';
import ClientList from './ClientList';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { clients: state.clients };
}

const ConnectedAside = ({ children, id, clients }) => (
  <div className="uk-offcanvas-content">
    <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-usage">Timeclock</button>

    {children}

    <div id="offcanvas-usage" uk-offcanvas="flip: true">
      <div className="uk-offcanvas-bar">
        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
        {/* Time clock goes here */}
        <ClientList allowTaskInteraction={true} />
      </div>
    </div>

</div>
);

const Aside = connect(mapStateToProps)(ConnectedAside);

export default Aside;