import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { startTimer, stopTimer } from '../actions';

const mapStateToProps = state => ({
  tasks: state.tasks,
  timer: state.timer,
  timerRunning: state.timerRunning
});

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  stopTimer: () => dispatch(stopTimer())
});

class ConnectedTaskList extends React.Component {
  toggleTimer = () => {
    const { timerRunning, startTimer, stopTimer } = this.props;

    if (timerRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  }

  render () {
    const { tasks, clientId, showPlayIcon, timerRunning } = this.props;
    return (
      <ul className="task-list">
        {tasks.filter(t => t.clientId === clientId).map(t => (
          <li key={t.id}>{t.name} {showPlayIcon ? <i className="start-timer-button" onClick={this.toggleTimer}><FontAwesomeIcon icon={timerRunning ? 'stop' : 'play'} size="xs" /></i> : ''}</li>
        ))}
      </ul>
    );
  }
}

const TaskList = connect(mapStateToProps, mapDispatchToProps)(ConnectedTaskList);

export default TaskList;