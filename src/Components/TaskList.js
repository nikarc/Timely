import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

const ConnectedTaskList = ({ tasks, clientId, showPlayIcon }) => (
  <ul className="task-list">
    {tasks.filter(t => t.clientId === clientId).map(t => (
      <li key={t.id}>{t.name} {showPlayIcon ? <i className="start-timer-button"><FontAwesomeIcon icon="play" size="xs" /></i> : ''}</li>
    ))}
  </ul>
);

const TaskList = connect(mapStateToProps)(ConnectedTaskList);

export default TaskList;