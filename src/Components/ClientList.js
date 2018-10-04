import React from 'react';
import { connect } from 'react-redux';
import { truncateString } from '../helpers';

import TaskList from './TaskList';

const mapStateToProps = state => {
  return { clients: state.clients };
};

const ConnectedClientList = ({ clients, allowTaskInteraction }) => (
  <ul className="client-list">
    {clients.map(c => (
      <li key={c.id}>
        <p className="client-header"><span className="client-tag">{truncateString(c.name)}</span> {c.name}</p>
        <TaskList clientId={c.id} showPlayIcon={allowTaskInteraction} />
      </li>
    ))}
  </ul>
);

const ClientList = connect(mapStateToProps)(ConnectedClientList);

export default ClientList;