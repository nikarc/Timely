import React from 'react';
import { connect } from 'react-redux';
import { formatDoubleDigits } from '../helpers';

const mapStateToProps = state => {
  return { timer: state.timer };
}

const styles = {
  timer: {
    fontSize: '3em',
    fontFamily: 'monospace',
    textAlign: 'center'
  }
}

class ConnectedTimer extends React.Component {
  state = {
    timerRunning: false
  }
  // startStopTimer () {
  //   if ()
  // }

  formatTime = () => `${formatDoubleDigits(Math.floor(this.props.timer / 3600))}:${formatDoubleDigits(Math.floor((this.props.timer % 3600) / 60))}:${formatDoubleDigits(this.props.timer % 60)}`;

  render () {
    return (
      <div id="time-clock">
        <div id="timer" style={styles.timer}>{this.formatTime()}</div>
      </div>
    );
  }
}

const TimeClock = connect(mapStateToProps)(ConnectedTimer);

export default TimeClock;